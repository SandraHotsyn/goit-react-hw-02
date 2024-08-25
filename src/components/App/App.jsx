import { useState } from "react";
import "./App.module.css";
import Buttons from "../Buttons/Buttons";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Buttons />
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
