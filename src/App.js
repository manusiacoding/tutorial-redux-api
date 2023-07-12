/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
  handleGetPublicAPI,
} from "./redux/global/globalActions";
import "./App.css";
import axios from "axios";

function App() {
  const counter = useSelector((state) => state.global.counter);
  const data = useSelector((state) => state.global.dataAPI);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  
  const handlerAction = async() => {
    dispatch(handleGetPublicAPI())
  }

  useEffect(() => {
    handlerAction()
  }, [])
  
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
      <button
        onClick={() => dispatch(incrementAsync(Number(incrementAmount || 0)))}
      >
        tambah async
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => dispatch(decrementAsync(Number(incrementAmount || 0)))}
      >
        kurang async
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(handleGetPublicAPI())}>Get Data</button>
      <table border={1} width={"100%"}>
        <thead>
          <th>No</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Probability</th>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{value?.name}</td>
              <td>{value?.gender}</td>
              <td>{value?.probability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
