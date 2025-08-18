"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Title from '../components/title';

interface Class {
    title: string;
    classSize: number;
    teacherFirstName?: string;
    teacherLastName?: string;
}

export default function Page() {
    const serverUrl = 'http://10.3.3.222:3000/';
    const [displayText, setDisplayText] = useState<Class[]>([]);
    const [token, setToken] = useState("");
    function fetchServer() {
        fetch(serverUrl, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // <-- send token here
            }
        })
            .then(response => response.json())
            .then((data: Class[]) => {
                console.log(Object.values(data))
                setDisplayText(Object.values(data))
            })
            .catch(err => {
                setDisplayText(err.message)
                console.log(err.message)
            });
    }
    return <>
        <Title page="Classlinkv3"></Title>
        <div className="flex gap-6">
            <input type="text" onChange={(e) => setToken(e.target.value)} className = "w-full bg-white placeholder:text-gray-600 text-black" placeholder='Authorization Token (Bearer <code>): '/>
            <button onClick={fetchServer} className="bg-white text-black cursor-pointer">Submit</button>
        </div>
        
        <div className="flex gap-6 flex-col mt-6 mb-6">
        {displayText.map((item, index) => {
            return (
                <div key={index}>
                    <p>Title: {item.title}</p>
                    <p>Class Size: {item.classSize}</p>
                    {(item.teacherFirstName) && <p>Teacher First Name: {item.teacherFirstName}</p>}
                    {(item.teacherLastName) && <p>Teacher Last Name: {item.teacherLastName}</p>}
                </div>)
        })}
        </div>
    </>

}