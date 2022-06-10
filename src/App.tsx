import React, {useState} from 'react';
import './App.css';
import Clock from "./Clock";
import DateTable from "./Date";

function App() {

    let [change, setChange] = useState<boolean>(true)

    const onClickChanger = () => setChange(!change)

    return (
        <div className="App">

            <h1>Clock</h1>
            {change ? <Clock /> : <DateTable />}
            <button className={'button'} onClick={onClickChanger}>{change ? "show date" : "show clock"}</button>
        </div>
    );
}

export default App;
