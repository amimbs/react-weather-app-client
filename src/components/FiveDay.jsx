import React from "react";

export default function FiveDay({ data }) {
    const weatherIcons = data.list.map((element) => {
        const iconUrl = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
        return (
                <div className="current-forecast">
                    <img src={iconUrl} alt="icon" />
                </div>
        )
    })
    return weatherIcons
}