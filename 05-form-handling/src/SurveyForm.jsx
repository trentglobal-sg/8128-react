import { useState } from "react";
export default function SurveyForm() {

    // useState create a state for the component
    // it returns two values in an array
    // index 0: current value of the state, as a variable
    // index 1: a function change the state
    // - the first parameter of useState is the state's initial value
    // the initial value only applies when the component displays (i.e renders)
    // for the first time
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [destination, setDestination] = useState("");
    const [activities, setActivities] = useState([]);

    const updateDestination = e => setDestination(e.target.value);

    const updateActivities = e => {
        console.log(e.target.value);

        // if the checkbox is being checked
        if (e.target.checked) {
            // the following two steps won't work
            // how React detects that a state has changed is if its value changed
            // activities.push(e.target.value)
            // setActivities(activities);

            // // the correct way to update an array
            // // 1. clone the original array
            // const cloned = activities.slice();
            // // 2. modify the clone
            // cloned.push(e.target.value);
            // // 3. replace the clone into the state
            // setActivities(cloned);

            // the elegant method
            setActivities([...activities, e.target.value]);
        } else {
            // older method
            // const modifiedActiviites = activities.filter(a => a !== e.target.value);
            // setActivities(modifiedActiviites);

            // newer method: toSpliced is like splice but it will clone the array first
            // and modify the cloned array instead and return it
            const indexToDelete = activities.findIndex(a => a === e.target.value);
            const modifiedActiviites = activities.toSpliced(indexToDelete, 1);
            setActivities(modifiedActiviites)
        }


    }


    return (<div>
        <div>
            <label>Name:</label>
            <input type="text" value={name}
                onChange={(event) => {
                    // so event.target.value will store
                    // the key that the user has just pressed
                    // or in other words, the new value
                    // of the textbox
                    // console.log(event.target.value)
                    setName(event.target.value)
                }}
            />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label>What's your next travel destination?</label>
            <input type="radio"
                name="destination"
                value="jb"
                onChange={updateDestination}
                checked={destination === "jb"}
            />
            <label>Johor Bahru</label>


            <input type="radio"
                name="destination"
                value="batam"
                onChange={updateDestination}
                checked={destination === "batam"}
            />
            <label>Batam</label>

            <input type="radio"
                name="destination"
                value="kyoto"
                onChange={updateDestination}
                checked={destination === "kyoto"}
            />
            <label>Kyoto</label>


            <input type="radio"
                name="destination"
                value="paris"
                onChange={updateDestination}
                checked={destination === "paris"}
            />
            <label>Paris</label>
        </div>


        <div>
            <label>What activities you do while travelling</label>

            <input type="checkbox"
                value="eat"
                onChange={updateActivities}
            />
            <label>Eat</label>

            <input type="checkbox"
                value="nature"
                onChange={updateActivities}
            />
            <label>Nature</label>

            <input type="checkbox"
                value="culture"
                onChange={updateActivities}
            />
            <label>Culture</label>

            <input type="checkbox"
                value="history"
                onChange={updateActivities}
            />
            <label>History</label>

            <input type="checkbox"
                value="shopping"
                onChange={updateActivities}
            />
            <label>Shopping</label>

            <input type="checkbox"
                value="recreation"
                onChange={updateActivities}
            />
            <label>Recreation</label>

        </div>



    </div>)
}