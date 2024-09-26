import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
} from "./store/counter/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const incrementBy10Handler = () => {
    dispatch(incrementBy(10));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const decrementBy5Handler = () => {
    dispatch(decrementBy(5));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={decrementBy5Handler}>Decrement by 5</button>
        <button onClick={decrementHandler}>-</button>
        <h2>{counter.value}</h2>
        <button onClick={incrementHandler}>+</button>
        <button onClick={incrementBy10Handler}>Increment by 10</button>
      </div>
    </>
  );
}

export default App;
