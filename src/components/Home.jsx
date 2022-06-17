import '../App.css';
import React from "react";
import SearchBar from './SearchBar'
import 'react-toastify/dist/ReactToastify.css';
import apiRequest from '../hooks/apiRequest';
import CurrentForecast from './CurrentForecast';
import styled from 'styled-components';
import image from '../assets/barren_by_josegoncalo_de24e2u.png'

import FiveDay from './FiveDay';

export default function Home({setQueryResult, queryResult}) {
    // move state to the app, through props pass down the value and the function
    // const [queryResult, setQueryResult] = useState('Atlanta')

    const { fiveDay, current, loading } = apiRequest(queryResult)

    const bodyDiv = Object.keys(fiveDay, current).length !== 0 && (
        // there has to be a wrapper here because react can only return a single url element
        <>
            <CurrentForecast current={current} />
            <h2 style={{ margin: "50px 0", color: 'white' }} className="forecast">Forecast</h2>
            <FiveDay fiveDay={fiveDay} />
        </>
    );

    const loadingDiv = <div className="loadingDiv">Loading . . .</div>

    return (
        <StyledHome>
            <div className="App">
                <h1 style={{ margin: "30px 0px" }}>Weather APP</h1>
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