import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsRunning, setTime } from "../slices/timerSlice";
import styled from "styled-components";

export const TimerPage = () => {
  const time = useSelector((state) => state.timer.time);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const initialTime = useSelector((state) => state.timer.initialTime);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (isRunning && time !== "00:00") {
      timer = setInterval(() => {
        const [minutes, seconds] = time.split(":").map(Number);

        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          dispatch(setIsRunning(false));
        } else {
          let newSeconds = seconds - 1;
          let newMinutes = minutes;

          if (newSeconds < 0) {
            newSeconds = 59;
            newMinutes -= 1;
          }

          const newTime = `${newMinutes < 10 ? "0" : ""}${newMinutes}:${
            newSeconds < 10 ? "0" : ""
          }${newSeconds}`;
          dispatch(setTime(newTime));
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, dispatch]);

  const handleStart = () => {
    dispatch(setIsRunning(true));
  };
  const handlePause = () => {
    dispatch(setIsRunning(false));
  };

  const handleReset = () => {
    dispatch(setTime(initialTime));
    console.log(initialTime);
    dispatch(setIsRunning(false));
  };
  return (
    <StyledContainer>
      <h2>{time}</h2>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  h2 {
    padding-top: 30px;
    font-size: 50px;
    color: darkviolet;
  }
  div {
    display: flex;
    gap: 20px;
  }
  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #57ae57;
    color: white;
    font-size: 18px;
    &:hover {
      background-color: #2d8c2d;
    }
  }
`;
