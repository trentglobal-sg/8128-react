import cake from "./assets/cake.jpg";
import tea from "./tea.jpg";
import "./App.css";

// the starting point of all React applications created with `npm create vite@latest`
// is App.jsx

// module.exports in React is export default
// The function must be named `App`
export default function App() {

  // Rules about JSX elements
  // 1. They are HTML
  // 2. No syntax error whatsoever
  // 3. You can only return one JSX element (however it can be a parent element
  // with multiple children)

  return <>
    <h1>Hello World</h1>
    <h2 className="important">Thank you for the cake</h2>
    {/* Anything in braces inside JSX is a JavaScript expression  */}
    {/* When doing inline styles in React, we use object to represent
    the style properties and the key are the camel case version of the properties */}
    <h3 style={{fontFamily: "Verdana", fontSize:"36px"}}>Lucky Number</h3>
    <p>{Math.random() * 10000 + 1}</p>
    <img src={cake} />
    <img src={tea} />
    <img src="cocoa.jpg" />

  </>
}