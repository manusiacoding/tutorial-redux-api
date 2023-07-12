/* eslint-disable */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from "./redux/global/globalActions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.global.counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>tambah</button>&nbsp;&nbsp;
      <button onClick={() => dispatch(decrement())}>kurang</button>
      <br />
      <br />
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => dispatch(incrementAsync(Number(incrementAmount || 0)))}>tambah async</button>&nbsp;&nbsp;
      <button onClick={() => dispatch(decrementAsync(Number(incrementAmount || 0)))}>kurang async</button>
    </div>
  );
}

export default App;
