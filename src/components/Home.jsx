import '../App.css';
import React from "react";
import { useState } from 'react';
import SearchBar from './SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiRequest from '../hooks/apiRequest';
import CurrentForecast from './CurrentForecast';
import FiveDay from './FiveDay';

export default function Home() {
    const [queryResult, setQueryResult] = useState('Atlanta')

    const { data, loading } = apiRequest(queryResult)

    //rename this to bodydiv
    const bodyDiv = Object.keys(data).length !== 0 && (
        // there has to be a wrapper here because react can only return a single url element
        <>
            <CurrentForecast data={data} />
            <h2 style={{ margin: "50px 0" }} className="forecast">Forecast</h2>
            <FiveDay data={data} />
        </>
    );

    const loadingDiv = <div className="loadingDiv">Loading . . .</div>

    // need a 3 divs, 
    // app
    // search Bar
    // and loading switching to app
    return (
        <div className="App">
            <ToastContainer />
            <h1 style={{ margin: "30px 0px" }}>Weather APP</h1>
            <SearchBar setQueryResult={setQueryResult} />
            {loading ? loadingDiv : bodyDiv}
        </div>
    )
}