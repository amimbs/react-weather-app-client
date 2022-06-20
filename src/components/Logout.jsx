import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'



export default function Logout({ activeUser }) {

    const nav = useNavigate()

    return (
        useEffect(() => {
            localStorage.clear(activeUser);
            nav('/login');
            window.location.reload(true);
        })
    )
}
