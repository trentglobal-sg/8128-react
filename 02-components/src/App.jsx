import Box from "../Box"
import ContactUs from "./ContactUs"
import SumTwo from "./SumTwo"

export default function App() {

  // a normal object to define the style properties
  const headerStyle = {
    "fontFamily":"Verdana"
  }

  // JSX elements are just JavaScript objects, so it's a value
  const header = <h2 style={headerStyle}>Delicious and Moist</h2>


  return <>
    <h1>Traditional Cakes of Singapore</h1>
    {header}

    <SumTwo number1={3} number2={4}/>

    <Box width={80} height={80} background="tomato"/>
    <Box width={120} height={60} background="steelBlue"/>


{/* A component can have properties. Each property will become a key in the props parameter */}
    <Alert message="Hello World" bgcolor="white"/>
    <Alert message="Danger, Awas, don't proceed" bgcolor="red"/>
    <Alert message="Job completed" bgcolor="green"/>

    <ContactUs/>

    {footer()}
  </>
}

// if JSX elements are just objects, they can be returned by functions too
function footer() {
  return <div style={{
    border:"1px solid black",
    padding:"10px"
  }}>(c) 2026 by Bakers Annoymous</div>
}

// Creating an alert component
// 1. A component is a function and
// 2. it returns JSX elements and
// 3. the first alphabet of the function must be in Uppercase
// we can pass parameters to a component via the props object
// all components in React has one parameter, known as "props", which is an object
function Alert(props) {
  return <div style={{border:"1px solid black", padding:"10px", backgroundColor:props.bgcolor}}>
    {props.message}
  </div>
}

