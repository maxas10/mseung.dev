"use client";
import Card from './card';
import React, { useEffect, useRef, useState } from 'react';

export default function Page() {
    const [cardsHidden, setCardsHidden] = useState<boolean>(false);
    const [cards, setCards] = useState<string[]>([]);
    const possibleCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [start,setStart] = useState<boolean>(false);

    useEffect(() => {
        const cardsArray = [];
        for (let i = 0; i < 10; i++) {
            const newIndex: number = Math.floor(Math.random() * possibleCards.length);
            const newCard: string = possibleCards[newIndex];
            cardsArray.push(newCard);
            if (cardsArray.filter(item => item === newCard).length == 4) {
                possibleCards.splice(newIndex, 1);
            }
        }
        setCards(cardsArray)

    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }

        if (e.key === "Enter") {
            e.preventDefault();
            if (index < inputsRef.current.length - 1) {
                inputsRef.current[index + 1]?.focus();
            } else {
                console.log("All inputs filled, submit here!");
            }
        }
    };

    const handleSubmitGuess = async () => {
        const guess = inputsRef.current.map(input => (input?.value || '').toUpperCase().trim());
        let score = 0; // need this one
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] == cards[i]) {
                score++;
            }
        }

        const body = new URLSearchParams();
        body.append('guesses', guess.join(' ')); // one field
        body.append(`answer`, cards.join(" "));
        body.append("score", score.toString());
        setLoading(true);
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxdcH1bDHnhM2nzIdp7LaeseJtmLyfqMzcWSaqkC9ACy_4q5-F_qEM2TisNqlTDC4j0/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded", // 👈 required
                    },
                    body: body.toString(),
                }
            );

            const result = await response.json();

            console.log(result)
            if (result.result === "success") {
                alert("Message sent. Thank you!")
                formRef.current?.reset();

                setLoading(false);
            } else {
                console.log(`Error: ${result.error}`);
                alert(Object.entries(result.error));
            }
        } catch (error) {
            console.log(error);
            alert(`Request failed: ${error}`);
        }
    }


    return <>
        <div className="absolute w-screen h-screen top-0 left-0 bg-white text-black flex justify-center items-center">
            <button onClick={() => {
                setStart(true);
                setTimeout(() => {
                    setCardsHidden(true);
                }, 15000);

                setTimeout(() => {
                    handleSubmitGuess();
                }, 30000);
            }} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">Start</button>
        </div>
        <img src="loading.gif" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-10" style={{ display: loading ? "block" : "none" }}></img>

        <div className="absolute w-screen h-screen top-0 left-0 bg-white text-black flex justify-center items-center  gap-4" style={{ display: start ? "flex" : "none" }}>
            {cards.map((card, i) => <Card key={i} value={card} hidden={cardsHidden} />)}
            <div className={`${cardsHidden ? '' : 'hidden'}`}>
                <p>Enter the cards in order (Enter + Backspace to move)</p>
                {/* <input type="input" className=' border-2'></input> */}
                <form className="flex gap-2" onSubmit={handleSubmitGuess} ref={formRef}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <input
                            name={`input-${i}`}
                            key={i}
                            ref={(el) => {
                                inputsRef.current[i] = el;
                            }}
                            type="text"
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            className="w-16 h-10 border text-center text-lg rounded uppercase"
                            autoFocus={i == 0 ? true : false}
                        />
                    ))}

                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer" type="submit" >Submit</button>
                </form>
            </div>
        </div>
    </>

}