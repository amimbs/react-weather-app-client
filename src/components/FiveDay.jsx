import styled from "styled-components";
import React from "react";

export default function FiveDay({ data }) {
    const weatherIcons = data.list.map((element, index) => {
        const iconUrl = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
        return (
                <StyleFiveDayForecast key={index} className="current-forecast">
                    <img src={iconUrl} alt="icon" />
                </StyleFiveDayForecast>
        )
    })
    return weatherIcons
}

const StyleFiveDayForecast = styled.div `
        margin-top: 40px;
`