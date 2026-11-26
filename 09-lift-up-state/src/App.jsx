import DisplaySum from "./DisplaySum";
import NumberBox from "./NumberBox";

import { useState } from "react";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0)
  return <>
    <NumberBox number={number1} setNumber={setNumber1}/>
    <NumberBox number={number2} setNumber={setNumber2}/>
    <DisplaySum n1={number1} n2={number2}/>
  </>
}