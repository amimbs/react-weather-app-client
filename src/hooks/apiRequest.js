import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const apiRequest = (queryResults) => {
    const apiKey = process.env.REACT_APP_WEATHER_KEY
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=${apiKey}`

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (queryResults !== "") {
            setLoading(true);
            axios.get(url).then((res) => {
                setLoading(false);
                setData(res.data);
            }).catch((err) => {
                toast.error('Please Check Your Damn Spelling');
                setLoading(false);
            });
        };
    }, [queryResults]);

    return { loading, data }
};

export default apiRequest