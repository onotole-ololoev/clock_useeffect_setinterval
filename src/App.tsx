import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    let [time, setTime] = useState<Date>(new Date)

    useEffect(() => {
        setInterval(() => {
            setTime((time) => new Date)
        }, 1000)
    }, [])


    return (
        <div className="App">

            <h1>Clock</h1>

            <div className={"table"}>
                <div className={"table-item"}>{time.toLocaleTimeString()}</div>
            </div>
        </div>
    );
}

export default App;
