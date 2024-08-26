import { useState } from "react";
import "./App.module.css";
import Buttons from "../Buttons/Buttons";
import Description from "../Description/Description";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateClicks = () => {
    setClicks(clicks + 1);
  };

  const resetClicks = () => {
    setClicks(0);
  };

  const updateValues = () => {
    setValues({
      ...values,
      good: 1,
    });
  };

  return (
    <>
      <Description />
      <Buttons value={clicks} onUpdate={updateClicks} />
      <Buttons value={clicks} onUpdate={updateClicks} />
      <button onClick={updateValues}>clicks{values.good + 1}</button>
      <button onClick={resetClicks}>reset clicks</button>
    </>
  );
}
