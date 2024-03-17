import { createBrowserRouter } from "react-router-dom";
import { App } from "../../App";
import { TimerPage } from "../pages/TimerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/timer",
    element: <TimerPage />,
  },
]);
