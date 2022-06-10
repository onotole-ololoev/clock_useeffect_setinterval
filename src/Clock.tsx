import React, {useEffect, useState} from 'react';
import './App.css';

const Clock = () => {
    let [time, setTime] = useState<Date>(new Date)


    useEffect(() => {
        let clockID = setInterval(() => {
            console.log('tick')
            setTime((time) => new Date)
        }, 1000)
        return () => {
            clearInterval(clockID)
        }
    }, [])


    return (
            <div className={"table"}>
                <div className={"table-item"}>{time.toLocaleTimeString()}</div>
            </div>
    );
}

export default Clock;