// useState is a function that allows to create 
// a state for a component
import { useState } from "react"


// a state is a piece of data that belongs to a component
// a component can have multiple states
export default function App() {

  // create a new state
  // - the useState returns an array of two elements
  //   - index 0: the current value of the state
  //   - index 1: a function to change the value of the state
  // - the first parameter to the useState is the default
  // value (ignored when the component re-draws/re-renders itself)
  // when a component's state changes, the component
  /// redraws itself by calling the component function again
  // use a state when an interaction would cause a visual change
  // or when you need the component to change visually because
  // of the user's action, you must use a state
  const [color, setColor] = useState("blue");
  const [size, setSize] = useState(30);
  const [show, setShow] = useState(true);

  return <>

    {show ? <div style={{
      border: "1px solid black",
      backgroundColor: color,
      width:  size + "px",
      height: size + "px"
    }}
    ></div> : null}


    <button onClick={()=>{
      setColor("red")
    }}>Change Color to Red</button>
    <button onClick={()=>{
      setSize(60);
    }}>Expand</button>
  </>
}