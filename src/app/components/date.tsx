"use client";
import {useState, useEffect}  from "react";

export default function CustomDate() {
    const [date,setDate] = useState(new Date());
    useEffect(() => {
        setDate(new Date());
        setInterval(()=> {setDate(new Date())},100);
    },[])
    return <p>{date!.toString()}</p>
}