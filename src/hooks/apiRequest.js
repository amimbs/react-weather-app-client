import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ApiRequest = (queryResults) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    console.log(data)

    useEffect(() => {
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${queryResults}&appid=${apiKey}&cnt=5`;
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

export default ApiRequest;