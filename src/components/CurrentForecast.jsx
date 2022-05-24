import React from "react";
import styled from "styled-components";

export default function CurrentForecast({ data }) {
    const currentData = data.list[0];

    return (
        <StyledCurrentForecast>
            <div className="current-forecast">
                <img src={`https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`} alt="" />
                <h1>{currentData.main.temp.toFixed()}°F</h1>
            </div>
        </StyledCurrentForecast>

    );
};

const StyledCurrentForecast = styled.div`
    display: flex;

`