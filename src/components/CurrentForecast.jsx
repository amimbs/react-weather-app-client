import React from "react";
import styled from "styled-components";
// import image from "../assets/dusty.jpg"
import image from "../assets/city.bmp"



export default function CurrentForecast({ current }) {
    const precipitation = current.current.precip_in;
    console.log(current.location.localtime)
    let apidate = new Date(current.location.localtime)
    let computerDate = apidate.getTime()/1000
    console.log(computerDate)
    let humanDate = new Date(computerDate * 1000);
    let readableDate = humanDate.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});;

    const formatPrecip = () => {

        if (precipitation === 0) {
            return '0 in';
        } else if (precipitation < 1) {
            return '< 1 in';
        } else {
            return precipitation.toFixed() + 'in';
        };
    };


    return (
        <StyledCurrentForecast>
            <div className="current-forecast box-shadow">

                <img src={current.current.condition.icon} alt="icon" />

                <h1>{current.current.temp_f.toFixed()}°F</h1>

                <div className="content">
                    <h5>
                        Precipitation Volumn: {formatPrecip()}
                    </h5>

                    <h5>
                        Wind Speed: {current.current.wind_mph.toFixed()} MPH
                    </h5>

                    <h5>
                        Humidity: {current.current.humidity}%
                    </h5>

                </div>
            </div>

            <div className="location box-shadow">
                <h2>
                    {current.location.name}
                </h2>
                <h3>
                    {current.location.region}
                </h3>
                <h4>
                    {current.location.country}
                </h4>

                <img src={image} alt="city" />

                <h5>
                    {readableDate}
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
            text-align: right;
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
            width: 150px;
            height: 100px;
            border-radius: 20px;
        }
    }

`