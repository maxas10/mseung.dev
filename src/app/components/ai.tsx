"use client"
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { useState } from 'react';

export default function Gemini() {
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });
    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<Array<string>>([]);

    const main = async () => {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        setResponse((response.text ?? "").replace(/\*\*/g, "").replace(/\#\#/g, "").split(/(?=\d+\.)/));
    };

    return <div>
        <textarea name="form" className="w-full bg-white text-black border-2 placeholder:text-gray-400" onInput={(e) => setPrompt((e.target as HTMLInputElement).value)} placeholder="Prompt" ></textarea>
        <button onClick={()=>{setResponse(["Loading..."]); main(); }} className="hover:text-gray-400 cursor-pointer">Send</button>
        <br />
        {response.map((item, index) => {
            return <p key={index} className="ml-10">{item}</p>
        })}
    </div>

}