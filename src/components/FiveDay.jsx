import styled from "styled-components";
import React from "react";
import moment from "moment";

//call backk function for each day
const dayMapper = (element, index) => {

    const iconUrl = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
    return (
        <StyleFiveDayForecast key={index} className={`current-forecast box-shadow`}>

            <div className="card box-shadow">
                <img src={iconUrl} alt="icon" />
                <span>{moment(element.dt_txt).format('h:mm a')}</span>
                <h1>{element.main.temp.toFixed()}°F</h1>
                <p>{element.weather[0].description.toUpperCase()}</p>
            </div>
        </StyleFiveDayForecast>
    )
}

export function getHumanDay(date) {
    let machineDate = new Date(date)
    const options = { weekday: "long" }
    return new Intl.DateTimeFormat('en-US', options).format(machineDate);

}

export default function FiveDay({ data }) {
    // let day1 = data.list.slice(0, 8).map(dayMapper);
    let day2 = data.list.slice(1, 9).map(dayMapper);
    let day3 = data.list.slice(9, 17).map(dayMapper);
    let day4 = data.list.slice(17, 25).map(dayMapper);
    let day5 = data.list.slice(25, 33).map(dayMapper);
    let day6 = data.list.slice(33, 40).map(dayMapper);

    // this is the indiviual day
    return (
        <div>

            <div className="container" >
                <h2 className="weekDay">{getHumanDay(data.list[1].dt_txt)}</h2>
                <div className="day">
                    {day2}
                </div>
            </div>

            <div className="container" >
                <h2 className="weekDay">{getHumanDay(data.list[9].dt_txt)}</h2>
                <div className="day">
                    {day3}
                </div>
            </div>

            <div className="container" >
                <h2 className="weekDay">{getHumanDay(data.list[17].dt_txt)}</h2>
                <div className="day">
                    {day4}
                </div>
            </div>

            <div className="container" >
                <h2 className="weekDay">{getHumanDay(data.list[25].dt_txt)}</h2>
                <div className="day">
                    {day5}
                </div>
            </div>

            <div className="container" >
                <h2 className="weekDay">{getHumanDay(data.list[33].dt_txt)}</h2>
                <div className="day">
                    {day6}
                </div>
            </div>
        </div>
    )
}

const StyleFiveDayForecast = styled.div`
    display: flex;

    .card {
        padding: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: right;
        background: #0f0f0f;
        color: white;

        span {
            text-align: center;
        }
        h1 {
           text-align: center;
            font-size: 1rem;
        }

        p {
            text-align: center;
            font-size: .8rem
        }
    }
`