"use client";
import * as birthdays from '../birthdays/birthdays.json'
import { useState, useEffect, useCallback } from "react";

interface BirthdayPeopleProps {
  onBirthdayDetected: (birthdayExists: boolean) => void;
}

interface Person {
    name: string;
    date: string;
}

interface SortedPerson {
    index: string;
    data: Person;
}

export default function BirthdayPeople({ onBirthdayDetected }: BirthdayPeopleProps) {
    const [birthdayPeople, setBirthdayPeople] = useState<Array<SortedPerson>>([]);
    let birthdayPeopleTemp: Array<SortedPerson> = [];
    const [allPeople, setAllPeople] = useState<Array<SortedPerson>>([]);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        const timer = setInterval(() => {
            const unsortedValues = Object.entries(birthdays).filter(([key]) => key !== 'default').filter(([key]) => key !== 'length');
            const birthdaysValues: Array<SortedPerson> = unsortedValues.map(([index, data]) => ({ index, data }));
            const sortedValuesInitial = handleSortInitial(birthdaysValues);
            setAllPeople(handleSortByCurrentDate(sortedValuesInitial));
        }, 100);

        return () => clearInterval(timer);
    }, []);




    const handleSortInitial = (values: Array<SortedPerson>) => {
        return values.sort(
            function (a: SortedPerson, b: SortedPerson) {
                const adate: number = Number(a.data.date)
                const bdate: number = Number(b.data.date)
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

    function handleSortByCurrentDate(values: Array<SortedPerson>) {
        birthdayPeopleTemp = [];
        const date = new Date();
        const dayString = String(date.getDate()).length > 1 ? String(date.getDate()) : "0" + String(date.getDate());
        const dateString = String(date.getMonth() + 1) + dayString;

        const shiftedPeople: Array<SortedPerson> = [];

        for (let i = 0; i < values.length; i++) {
            if(Number(values[i].data.date) == Number(dateString)) {
                birthdayPeopleTemp.push(values[i]);
                onBirthdayDetected(true);
                values.shift();
                i--;
            } else if (Number(values[i].data.date) < Number(dateString)) {
                shiftedPeople.push(values[i]);
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
                <div>Happy Birthday! 🥳🎉</div>
                <ul>
                    {birthdayPeople.map((person: SortedPerson) => {
                        return (
                            <li key={person.data.name} className="w-1/3 flex justify-between">
                                <p>{person.data.name}</p>
                                <p>{months[Number(person.data.date.charAt(0) + person.data.date.charAt(1))-1]} {Number(person.data.date.charAt(2) + person.data.date.charAt(3))}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>}
            <br />
            <div>
                Upcoming Birthdays
                <ul>{allPeople.map((person: SortedPerson) => {
                    return <li key={person.data.name} className='flex-row w-1/3 flex justify-between'>
                        <p>{person.data.name}</p>
                        <p>{months[Number(person.data.date.charAt(0) + person.data.date.charAt(1))-1]} {Number(person.data.date.charAt(2) + person.data.date.charAt(3))}</p>
                    </li>
                })}</ul>
            </div>
        </div>
    )
}