"use client";
import Image from 'next/image';
import { ChangeEvent, createElement, useState } from 'react';

export default function Page() {

    const [stateTable, setStateTable] = useState(
        [
            'A00RH', 'A10RB',
            'B00RC', 'B11RB',
            'C01LD', 'C11RC',
            'D00LE', 'D11LD',
            'E01RA', 'E11LE'
        ]);


    const [tapeValue, setTapeValue] = useState([1, 1, 1, 1]);
    const [tape, setTape] = useState(tapeValue);

    let delay = 0;

    // const [tapeIndex, setTapeIndex] = useState(0);
    const [tapeIndex, setTapeIndex] = useState(0);

    let newState: string;

    let logs: string[] = [];
    const [logsElem, setLogsElem] = useState(logs);

    const [steps, setSteps] = useState(50);

    function startMachine() {
        logs = ["Start " + "[(" + tapeValue[0] + ")," + tapeValue.slice(1) + "]"];
        setLogsElem(logs);
        setTape(tapeValue);
        setTapeIndex(0);

        const initialState = nextFunction("A", tapeValue, 0); // or just "A00RA"
        ownerFunction(initialState, tapeValue, 0);
    }

    function ownerFunction(state: string, currentTape: number[], currentIndex: number) {
        if (state === "none" || logs.length >= steps) return;

        const read = state[1];
        const write = state[2];
        const move = state[3];
        const next = state[4];

        let functionPass = false;

        const newTape = [...currentTape];
        const tapeVal = newTape[currentIndex] ?? 0;

        if (tapeVal === Number(read)) { newTape[currentIndex] = Number(write); };

        let newIndex = currentIndex;
        if (move === "R") newIndex++;
        else if (move === "L") {
            newIndex--;
            if (newIndex < 0) {
                newTape.unshift(0);
                newIndex = 0;
            }
        }

        const emptyNumPicked = String(newTape.slice(newIndex, newIndex + 1)) == "" ? "x" : newTape.slice(newIndex, newIndex + 1);
        console.log("sdf: '" + String(newTape.slice(0, newIndex)) + "'")
        if (String(newTape.slice(0, newIndex)) == "") {
            logs.push(state + " [" + newTape.slice(0, newIndex) + "(" + emptyNumPicked + ")," + newTape.slice(newIndex + 1) + "]");
        } else if(String(newTape.slice(newIndex + 1)) == "") {
            logs.push(state + " [" + newTape.slice(0, newIndex) + ",(" + emptyNumPicked + ")" + newTape.slice(newIndex + 1) + "]");
        } else {
            logs.push(state + " [" + newTape.slice(0, newIndex) + ",(" + emptyNumPicked + ")," + newTape.slice(newIndex + 1) + "]");
        }
        setLogsElem([...logs]);

        setTape(newTape);
        setTapeIndex(newIndex);

        if (next === "H") {logs.push("HALT"); console.log(logs); setLogsElem([...logs]); return };

        const nextState = nextFunction(next, newTape, newIndex);

        setTimeout(() => { ownerFunction(nextState, newTape, newIndex) }, delay);
    }
    function nextFunction(next: string, currentTape: number[], currentIndex: number) {
        const allNext = stateTable.filter(item => item.startsWith(next));

        for (let s of allNext) {
            const readVal = Number(s[1]);
            const tapeVal = currentTape[currentIndex] ?? 0;
            if (tapeVal === readVal) return s;
        }
        return "none";
    }
    // getStates();
    // setLogsElem(prev => logs);

    // function getStateList(string) {
    //     console.log(string.split(" "))
    // }

    // getStateList("A00RH A10RB B00RC B11RB C01LD C11RC D00LE D11LD E01RA E11LE");
    return <>
        <p>State Table (state name, read, write, move, next state, H=halt)</p>
        <textarea name="area" id="area" className="w-1/2 h-[300px] border-2" defaultValue={stateTable.join("\n")} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setStateTable(e.target.value.split("\n")) }}></textarea>
        <br />

        <p>Starting Tape (0,1)</p>
        <textarea name="area2" id="area2" className="w-1/2 h-full border-2" defaultValue={tape.join("")} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setTapeValue(e.target.value.split("").map(Number)); setTape(e.target.value.split("").map(Number)) }}></textarea>
        <br />

        <p>Maximum # of steps</p>
        <input type="number" className="border-2" defaultValue={steps} onInput={(e: React.ChangeEvent<HTMLInputElement>) => { setSteps(Number(e.target.value)) }} />
        <br />
        <br />
        <button onClick={() => { startMachine() }}>Run</button>
        <p>logs start here -----</p>
        {logsElem.map((log, index) => log == "HALT" ? <p key={index}>{index}: {log}</p> : <p key={index}>{index}: {log.slice(0, log.indexOf("("))}<span className="text-red-500">{log.slice(log.indexOf("(") + 1, log.indexOf(")"))}</span>{log.slice(log.indexOf(")") + 1)}</p>)}
        <p>logs end here -----</p>
    </>

}