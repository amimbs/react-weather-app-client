import React from "react";
import styled from "styled-components";
import image from "../assets/city.bmp"
import { getHumanDay } from "./FiveDay";



export default function CurrentForecast({ data }) {
    const currentData = data.list[0];
    const precipitation = currentData.rain ? (currentData.rain[Object.keys(currentData.rain)[0]] / 25.4) : 0;
    let date = new Date(currentData.dt_txt)
    const options = { weekDay: "long" }
    let day = new Intl.DateTimeFormat('en-US', options).format(date);

    return (
        <StyledCurrentForecast>
            <div className="current-forecast box-shadow">
                <img src={`https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`} alt="icon" />
                <h1>{currentData.main.temp.toFixed()}°F</h1>

                <div className="content">
                    <h5>
                        Precipitation Volumn: {precipitation.toFixed()} in
                    </h5>
                    <h5>
                        Wind Speed: {currentData.wind.speed} MPH
                    </h5>
                    <h5>
                        Humidity: {currentData.main.humidity}%
                    </h5>

                </div>
            </div>

            <div className="location box-shadow">
                <h2>
                    {data.city.name}
                </h2>
                <h3>
                    {data.city.country}
                </h3>
                <img src={image} alt="city" />
                <h4>
                    {day}
                </h4>
                <h5>
                    {getHumanDay(currentData.dt_txt)}
                </h5>
            </div>

        </StyledCurrentForecast>

    );
};

const StyledCurrentForecast = styled.div`
    display: flex;
    justify-content: space-between;

    .current-forecast{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 350px;
        padding: 20px;
        flex-direction: column;
        background: black;
        color: white;

        img {
            width: 150px;
            height: 150px;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 30px
        }

        .content {
            h5 {
                font-weight: normal;
            }
        }
    }

    .location {
        width: 350px;
        padding: 20px;
        background: black;
        color: white;

        h2 {
            text-align: right;
            font-size: 2rem;
            margin-bottom: 10px;
        }
        h3 {
            text-align: right;
            font-size: 1rem;
            margin-bottom: 10px;
        }
        h4 {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 10px;
            font-weight: 500;
        }
        h5 {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 10px;
            font-weight: 500;
        }
        img {
            margin-bottom: 10px;
            width: 200px;
        }
    }

`