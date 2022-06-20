import React from "react";
import styled from 'styled-components';

import '../App.css'; 
import 'react-toastify/dist/ReactToastify.css';

import apiRequest from '../hooks/apiRequest';
import CurrentForecast from './CurrentForecast';
import FiveDay from './FiveDay';
import image from '../assets/barren_by_josegoncalo_de24e2u.png'
import SearchBar from './SearchBar'

export default function Home({activeUser, setActiveUser, setQueryResult, queryResult}) {
    // move state to the app, through props pass down the value and the function

    const { fiveDay, current, loading } = apiRequest(queryResult)

    const bodyDiv = Object.keys(fiveDay, current).length !== 0 && (
        // there has to be a wrapper here because react can only return a single url element
        <>
            <CurrentForecast current={current} activeUser={activeUser} setActiveUser={setActiveUser} />
            <h2 style={{ margin: "50px 0", color: 'white' }} className="forecast">Forecast</h2>
            <FiveDay fiveDay={fiveDay} />
        </>
    );

    const active = 
        <>
            <h5>
                Hello, Andy
            </h5>
        </>

    const noactive =
        <></>

    const loadingDiv = <div className="loadingDiv"></div>

    return (
        <StyledHome>
            <div className="App">
                <h1 style={{ margin: "10px 0px" }}>Weather APP</h1>
                {activeUser ? active : noactive}
                <SearchBar setQueryResult={setQueryResult} />
                {loading ? loadingDiv : bodyDiv}
            </div>
        </StyledHome>
    );
}

const StyledHome = styled.div`
    {
        background: url(${image}) no-repeat center center/cover;
        height: 100%
    }
`