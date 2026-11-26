import { useState } from "react";
export default function NumberBox(props) {

    return (<div style={{border:"1px solid black", 
            "padding":"10px",
            "width":"50px"}}>
        <input type="number"
               style={{"width":"35px"}}
               value={props.number}
               onChange={e => props.setNumber(e.target.value)}
        />
    </div>)
}