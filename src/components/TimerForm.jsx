import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInitialTime, setTime } from "./slices/timerSlice";
import styled from "styled-components";

export const TimerForm = () => {
  const [time, setTimeValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangeInput = (event) => {
    setTimeValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
    if (!isValidTime) {
      alert("Введите время в формате чч:мм");
      setTimeValue("");

      return;
    }
    dispatch(setInitialTime(time));
    dispatch(setTime(time));
    navigate("/timer");
  };
  return (
    <StyledContainer>
      <h1>Сountdown timer</h1>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={time}
          onChange={handleChangeInput}
          placeholder="Enter your time..."
        />
        <button type="submit">add</button>
      </StyledForm>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  h1 {
    padding-top: 30px;
    color: darkblue;
    font-size: 40px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  input {
    width: 150px;
    height: 30px;
    padding-left: 10px;
    border-color: cadetblue;
    border-radius: 3px;

    color: darkblue;
    outline: none;
  }
  button {
    width: 60px;
    border-radius: 3px;
    border: none;
    background-color: #5eb75e;
    color: white;
    &:hover {
      background-color: #288b28;
    }
  }
`;
