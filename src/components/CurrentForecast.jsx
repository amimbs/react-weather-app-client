import React from "react";
import styled from "styled-components";

export default function CurrentForecast({ data }) {
    const currentData = data.list[0];
    const precipitation = (currentData.rain[Object.keys(currentData.rain)[0]] / 25.4)
    let date = new Date(currentData.dt_txt)
    const options = { weekDay: "long" }
    let day = new Intl.DateTimeFormat('en-US', options).format(date);

    return (
        <StyledCurrentForecast>
            <div className="current-forecast box-shadow">
                <img src={`https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`} alt="" />
                <h1>{currentData.main.temp.toFixed()}°F</h1>

                <div className="content">
                    <h5>
                        Precipitation: {precipitation.toFixed()} in
                    </h5>
                    <h5>
                        Wind: {currentData.wind.speed} MPH
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
                <h4>
                    {day}
                </h4>
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
        width: 400px;
        padding: 20px;
        flex-direction: column;

        img {
            width: 80px;
            height: 80px;
        }

        h1 {
            font-size: 2rem;
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

        h2{
            text-align: right;
            font-size: 2rem;
            margin-bottom: 10px;
        }
        h3{
            text-align: right;
            font-size: 1rem;
            margin-bottom: 10px;
        }
        h4{
            text-align: right;
            font-size: 1rem;
            margin-bottom: 10px;
            font-weight: 500;
        }
    }

`