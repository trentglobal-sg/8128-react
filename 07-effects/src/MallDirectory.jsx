import { useState, useEffect } from "react";
import axios from 'axios'

export default function MallDirectory() {
    const [shops, setShops] = useState([])

    const [promotions, setPromotions] = useState([
        "10% off parking on weekends",
        "Get $20 voucher for every $100 spent",
        "Buy two get one free at Toastbox"
    ])

    const [events, setEvents] = useState([]);

    const renderShops = () => {
        const jsx = [];
        for (let s of shops) {
            jsx.push(<li key={s}>{s}</li>)
        }
        return jsx;
    }

    // useEffect takes two parameters
    // parameter 1: the effect function CANNOT be aysnc
    // parameter 2: an array of dependencies
    // if the array is empty, then the effect function
    // will be called ONCE when the component displays (i.e renders)
    // for the first time (it is sort of like "DOMContentLoaded")
    useEffect(()=>{
        
        const loadData = async () => {
            const response = await axios.get("shops.json");
            setShops(response.data);
        }
        loadData();


    }, [])

    // effect to load the events
    useEffect(()=>{
        const loadData = async () => {
            const response = await axios.get("events.json");
            setEvents(response.data);
        }
        loadData();
    }, []);

    return (<>
        <h1>Mall Directory</h1>
        <ul>
            {
                renderShops()
            }
        </ul>
        <h1>Promotions</h1>
        <ul>
            {
                promotions.map((p, index) => <li key={index}>{p}</li>)
            }
        </ul>
        <h1>Events</h1>
        <ul>
            {
                events.map((event, index) => <li
                    key={index}
                >
                    Date: {event.date}, Name: {event.name}

                </li>)
            }
        </ul>
    </>)
}