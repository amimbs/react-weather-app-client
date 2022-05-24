import React from "react";

export default function CurrentForecast({ data }) {
    const weatherIcons = data.list.map((element) => {
        const iconUrl = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
        return (
            <div key={element.dt}>
                <div className="current-forecast">
                    <img src={iconUrl} alt="" />
                </div>
            </div>
        )
    })
    return weatherIcons
}