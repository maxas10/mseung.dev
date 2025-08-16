"use client"
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { useState } from 'react';

export default function Gemini() {
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });
    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [remember, setRemember] = useState<boolean>(true);

    const main = async () => {
        const geminiResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        setResponse(geminiResponse.text ?? "");
    };

    const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(remember) {
            setPrompt(prev => prev + " | " + e.target.value)
        } else {
            setPrompt(e.target.value);
        }
    };

    return <div>
        <textarea name="form" className="w-full bg-white text-black border-2 placeholder:text-gray-400" onInput={(e) => handlePromptChange(e as any)} placeholder="Prompt" ></textarea>
        <div className="flex gap-3">
            <input type="checkbox" onChange={() => {setRemember(!remember)}} checked={remember}/>
            <p>Remember past prompts</p>
        </div>
        <button onClick={() => { setResponse("Loading..."); main(); }} className="hover:text-gray-400 cursor-pointer">Send</button>
        <br />
        {response}
    </div>

}