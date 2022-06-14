import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const ApiRequest = (queryResults) => {

    const [fiveDay, setFiveDay] = useState({});
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState({});

    useEffect(() => {
        async function weatherApp() {
            try {
                const apiKey = process.env.REACT_APP_WEATHER_KEY;
                const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
                const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${queryResults}&appid=${apiKey}&units=imperial&cnt=40`;
                // const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${queryResults}&appid=${apiKey}&units=imperial`;
                const currentURL = `http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${queryResults}&days=10&aqi=no&alerts=no`
                if (queryResults !== "") {
                    setLoading(true);
                    const fiveDayRes = await axios.get(fiveDayURL);
        
                    setFiveDay(fiveDayRes.data);
        
                    const currentRes = await axios.get(currentURL);
                    setCurrent(currentRes.data)
        
                    setLoading(false);
                };
            } catch (err) {
                toast.error('Please Check Your Damn Spelling');
                setLoading(false);
            }
        }
        weatherApp();
    }, [queryResults]);
    return { loading, fiveDay, current }
};

export default ApiRequest;