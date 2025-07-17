"use client";
import { useState } from "react";
import Title from "../components/title"
import Confetti from "../components/confetti";
import CustomDate from "../components/date";
import BirthdayPeople from "../components/birthdaypeople";

export default function Page() {
    const [hasBirthday,setHasBirthday] = useState<boolean>(false);
    
  const handleBirthdayDetected = (birthdayExists: boolean): void => {
    setHasBirthday(birthdayExists);
  };


    return <>
        <Title page="Birthdays"></Title>
        <CustomDate/>
        <BirthdayPeople onBirthdayDetected={handleBirthdayDetected}/>
        {hasBirthday && <Confetti />}
    </>
}