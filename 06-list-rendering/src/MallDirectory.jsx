import { useState } from "react";

export default function MallDirectory() {
    const [shops, setShops] = useState([
        "Coffee Beans",
        "Ya Kun",
        "Toastbox",
        "Uniqlo",
        "NTUC Fairprice",
        "Suki-ya"
    ])

    const [promotions, setPromotions] = useState([
        "10% off parking on weekends",
        "Get $20 voucher for every $100 spent",
        "Buy two get one free at Toastbox"
    ])

    const [events, setEvents] = useState([
        {
            "date": "24th Dec",
            "name": "Christmas Carol"
        },
        {
            "date": "25th Dec",
            "name": "Santa Claus Lucky Draw"
        },
        {
            "date": "31st Dec",
            "name": "New Year Countdown"
        }
    ])

    const renderShops = () => {
        const jsx = [];
        for (let s of shops) {
            jsx.push(<li key={s}>{s}</li>)
        }
        return jsx;
    }

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