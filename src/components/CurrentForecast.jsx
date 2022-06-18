import axios from "axios";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import image from "../assets/city.bmp"

export default function CurrentForecast({ activeUser, current, setActiveUser }) {
    const precipitation = current.rain && current.rain['1h'] ? (current.rain['1h'] / 25.4) : 0;
    const date = moment.unix(current.dt)
    const readableDate = date.format('dddd MMMM Do YYYY')

    const formatPrecip = () => {

        if (precipitation === 0) {
            return '0 in'
        } else if (precipitation < 1) {
            return '< 1 in'
        } else {
            return precipitation.toFixed() + 'in'
        };
    };

    const setDefaultCity = async () => {

        await axios.post('http://localhost:3001/users/set-default', {
            defaultCity: current.name,
            userId: activeUser.id
        });

        let localUser = {
            ...activeUser,
            defaultCity: current.name
        }
        setActiveUser(localUser);
        console.log(localUser)
        localStorage.setItem('activeUser', JSON.stringify(localUser))
    };
    

    return (
        <StyledCurrentForecast>
            <div className="current-forecast box-shadow">
                <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="icon" />
                <h1>{current.main.temp.toFixed()}°F</h1>
                <h4>{current.weather[0].description}</h4>

                <div className="content">
                    <h5>
                        Precipitation Volumn: {formatPrecip()}
                    </h5>
                    <h5>
                        Wind Speed: {current.wind.speed.toFixed()} MPH
                    </h5>
                    <h5>
                        Humidity: {current.main.humidity}%
                    </h5>

                </div>
            </div>

            <div className="location box-shadow">
                {activeUser && <button onClick={setDefaultCity}>Set Default</button>}
                <h2>
                    {current.name}
                </h2>
                <h3>
                    {current.sys.country}
                </h3>
                <img src={image} alt="city" />
                <h4>
                    {readableDate}
                </h4>
                <h5>
                    Lat: {current.coord.lat}
                    <br />
                    Lon: {current.coord.lon}
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
            margin-bottom: 10px
        }

        h4 {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 10px;
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
            font-size: .95rem;
            font-weight: 500;
        }
        img {
            margin-bottom: 10px;
            width: 150px;
            height: 100px;
            border-radius: 20px;
        }
    }

`