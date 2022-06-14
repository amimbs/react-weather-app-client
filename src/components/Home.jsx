import '../App.css';
import React from "react";
import { useState } from 'react';
import SearchBar from './SearchBar'
import 'react-toastify/dist/ReactToastify.css';
import apiRequest from '../hooks/apiRequest';
// import CurrentForecast from './CurrentForecast';
import CurrentForecast2 from './CurrentForecast';

import FiveDay from './FiveDay';

export default function Home() {
    const [queryResult, setQueryResult] = useState('Atlanta')

    const { fiveDay, current, loading } = apiRequest(queryResult)
    console.log(queryResult)

    const bodyDiv = Object.keys(fiveDay, current).length !== 0 && (
        // there has to be a wrapper here because react can only return a single url element
        <>
            <CurrentForecast2 current={current} />
            <h2 style={{ margin: "50px 0" }} className="forecast">Forecast</h2>
            <FiveDay fiveDay={fiveDay} />
        </>
    );

    const loadingDiv = <div className="loadingDiv">Loading . . .</div>

    return (
        <div className="App">
            <h1 style={{ margin: "30px 0px" }}>Weather APP</h1>
            <SearchBar setQueryResult={setQueryResult} />
            {loading ? loadingDiv : bodyDiv}
        </div>
    );
}