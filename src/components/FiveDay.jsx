import styled from "styled-components";
import React from "react";

export default function FiveDay({ data }) {
    const weatherIcons = data.list.map((element) => {
        const iconUrl = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
        return (
                <StyleFiveDayForecast className="current-forecast">
                    <h2>Forecast</h2>
                    <img src={iconUrl} alt="icon" />
                </StyleFiveDayForecast>
        )
    })
    return weatherIcons
}

const StyleFiveDayForecast = styled.div `
        margin-top: 40px;
    h2{
        margin: 20px 0;
    }
`