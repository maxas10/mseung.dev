"use client";
import * as birthdays from '../birthdays/birthdays.json'
import { useState, useEffect } from "react";

interface BirthdayPeopleProps {
  onBirthdayDetected: (birthdayExists: boolean) => void;
}

export default function BirthdayPeople({ onBirthdayDetected }: BirthdayPeopleProps) {
    const [birthdayPeople, setBirthdayPeople] = useState<any>([]);
    let birthdayPeopleTemp: Array<any> = [];
    const [allPeople, setAllPeople] = useState<any>([]);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        const timer = setInterval(() => {
            const birthdaysValues = Object.entries(birthdays).filter(([key]) => key !== 'default');
            const sortedValuesInitial = handleSortInitial(birthdaysValues);
            setAllPeople(handleSortByCurrentDate(sortedValuesInitial));
        }, 100);

        return () => clearInterval(timer);
    }, []);




    function handleSortInitial(values: Array<Array<any>>) {
        return values.sort(
            function (a: any, b: any) {
                const adate: number = Number(a[1].date)
                const bdate: number = Number(b[1].date)
                if (adate > bdate) {
                    return 1;
                }
                if (adate < bdate) {
                    return -1;
                }
                return 0;
            }
        )
    }

    function handleSortByCurrentDate(values: Array<Array<any>>) {
        birthdayPeopleTemp = [];
        const date = new Date();
        const dayString = String(date.getDate()).length > 1 ? String(date.getDate()) : "0" + String(date.getDate());
        const dateString = String(date.getMonth() + 1) + dayString;

        const shiftedPeople: Array<Array<any>> = [];

        for (let i = 0; i < values.length; i++) {
            if (Number(values[i][1].date) < Number(dateString)) {
                shiftedPeople.push(values[i]);
                values.shift()
                i--;
            } else if (Number(values[i][1].date) == Number(dateString)) {
                birthdayPeopleTemp.push(values[i]);
                onBirthdayDetected(true);
                console.log([...birthdayPeople, values[i]])
                values.shift();
                i--;
            }
        }
        setBirthdayPeople([...birthdayPeopleTemp]);
        values.push(...shiftedPeople)

        return values;
    }

    return (
        <div>
            {birthdayPeople.length > 0 && <div >
                <br />
                <h1>Happy Birthday! 🥳🎉</h1>
                <ul>
                    {birthdayPeople.map((person: any) => {
                        return (
                            <li key={person[0]} className="w-1/3 flex justify-between">
                                <p>{person[0]}</p>
                                <p>{months[Number(person[1].date.charAt(0) + person[1].date.charAt(1))-1]} {Number(person[1].date.charAt(2) + person[1].date.charAt(3))}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>}
            <br />
            <div>
                Upcoming Birthdays
                <ul>{allPeople.map((person: any) => {
                    return <li key={person[0]} className='flex-row w-1/3 flex justify-between'>
                        <p>{person[0]}</p>
                        <p>{months[Number(person[1].date.charAt(0) + person[1].date.charAt(1))-1]} {Number(person[1].date.charAt(2) + person[1].date.charAt(3))}</p>
                    </li>
                })}</ul>
            </div>
        </div>
    )
}