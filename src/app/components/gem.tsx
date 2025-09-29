"use client"
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { useState } from 'react';


export default function Gem() {
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });
    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [responseFormatted, setResponseFormatted] = useState<Array<string>>([]);
    const [remember, setRemember] = useState<boolean>(true);
    const [formatted, setFormatted] = useState<boolean>(true);

    const main = async () => {
        const geminiResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        setResponse(geminiResponse.text ?? "");
        console.log(geminiResponse.text?.split(/(?=\d+\.)/))
        setResponseFormatted(geminiResponse.text?.replace(/\*\*/g, "").replace(/\#\#/g, "").replace(/\*\*/g, "").split(/(?=\b\d+\.)/) || []);
    };

    const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(remember && prompt.length > 0) {
            setPrompt(prev => prev + " " + e.target.value)
        } else {
            setPrompt(e.target.value);
        }
    };

    return <div>
        <textarea name="form" className="w-full bg-white text-black border-2 placeholder:text-gray-400" onInput={(e) => handlePromptChange(e as React.ChangeEvent<HTMLTextAreaElement>)} placeholder="Prompt" ></textarea>
        <div className="flex gap-3">
            <input type="checkbox" onChange={() => {setRemember(!remember)}} checked={remember}/>
            <p>Remember past prompts</p>
        </div>
        <div className="flex gap-3">
            <input type="checkbox" onChange={() => {setFormatted(!formatted)}} checked={formatted}/>
            <p>Formatting (number list, no ##, no **)</p>
        </div>
        <button onClick={() => { setResponse("Loading..."); setResponseFormatted(["Loading..."]); main(); }} className="hover:text-gray-400 cursor-pointer">Send</button>
        <div className="mt-5"></div>
        <div className="flex flex-col gap-3">
        {formatted ? responseFormatted.map((line, index) => (
            <p key={index}>
                {line}
            </p>
        )) : response}
        </div>
    </div>

}