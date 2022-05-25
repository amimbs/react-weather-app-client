import styled from "styled-components";
import React from "react";
import moment from "moment";

// day1:0 - 7 , 
// day2: 8 - 15, 
// day3: 16-24, 
// day4: 25 - 32, 
// day5:33 - 40

//call backk function for each day
const dayMapper = (element, index) => {

    const iconUrl = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
    return (
        <StyleFiveDayForecast key={index} className={`current-forecast box-shadow`}>
            <div className="card box-shadow">
                <img src={iconUrl} alt="icon" />
                <span>{moment(element.dt_txt).format('h:mm a')}</span>
                <p>{element.main.temp.toFixed()}°F</p>
                <p>{element.weather[0].description.toUpperCase()}</p>
            </div>
        </StyleFiveDayForecast>
    )
}

const getHumanDay = (date) => {
    let machineDate = new Date(date)
    const options = { weekday: "long" }
    return new Intl.DateTimeFormat('en-US', options).format(machineDate);

}

export default function FiveDay({ data }) {
    let day1 = data.list.slice(0, 8).map(dayMapper);
    let day2 = data.list.slice(8, 16).map(dayMapper);
    let day3 = data.list.slice(16, 24).map(dayMapper);
    let day4 = data.list.slice(24, 32).map(dayMapper);
    let day5 = data.list.slice(32, 40).map(dayMapper);

    // this is the indiviual day
    return (
        <div>

            <h2>{getHumanDay(data.list[0].dt_txt)}</h2>
            <div className="day1">
                {day1}
            </div>

            <h2>{getHumanDay(data.list[8].dt_txt)}</h2>
            <div className="day2">
                {day2}
            </div>

            <h2>{getHumanDay(data.list[16].dt_txt)}</h2>
            <div className="day3">
                {day3}
            </div>

            <h2>{getHumanDay(data.list[24].dt_txt)}</h2>
            <div className="day4">
                {day4}
            </div>

            <h2>{getHumanDay(data.list[32].dt_txt)}</h2>
            <div className="day5">
                {day5}
            </div>
        </div>
    )
}

const StyleFiveDayForecast = styled.div`
        display: flex;
        margin-top: 40px;

    .card {
        padding: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: right;
        background: #0f0f0f;
        color: white;
    }
`