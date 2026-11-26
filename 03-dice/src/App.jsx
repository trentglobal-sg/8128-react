import { useState } from 'react';

function getDiceColor(value) {
  if (value === 1) {
    return "red"
  } else if (value===6) {
    return "green";
  } else {
    return "black";
  }
}

export function Dice() {
  // declare your state here
  const [value, setValue] = useState(1);

  // @lock
  const wrapperStyle = {
    width: 80,
    height: 80,
    border: '2px solid black',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  };
  // @endlock

  return (
    <div>
      <div data-testid="face" style={{ ...wrapperStyle, color: getDiceColor(value) }}>
        {value}
      </div>
      <button onClick={()=>{
        const newNumber = Math.floor(Math.random() * 6) + 1;
        setValue(newNumber);
      }}>Roll</button>
    </div>
  );
}

export default function App() {
  return <Dice />;
}