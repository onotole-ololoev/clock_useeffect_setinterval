import React, {useEffect, useState} from 'react';
import './App.css';

const DateTable = () => {

    // useEffect(() => {
    //     let clockID = setInterval(() => {
    //         console.log('tick')
    //         setCalendar((time) => new Date)
    //     }, 1000)
    //     return () => {
    //         clearInterval(clockID)
    //     }
    // }, [])
    let currentDate = new Date();
    const showDateCorrectly = (value: number) => {
        return value < 10 ? "0" + value : value
    }

    return (
        <div className={"table"}>
            <div className={"table-item"}>
                {/*<span>{currentDate.getDate()}</span>*/}
                {/*-*/}
                {/*<span>{currentDate.getMonth()}</span>*/}
                {/*-*/}
                {/*<span>{currentDate.getFullYear()}</span>*/}
                <span>{showDateCorrectly(currentDate.getDate())}</span>
                -
                <span>{showDateCorrectly(currentDate.getMonth())}</span>
                -
                <span>{showDateCorrectly(currentDate.getFullYear())}</span>
            </div>
        </div>
    );
}

export default DateTable;