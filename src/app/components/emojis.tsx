"use client";

import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';
import Emoji from './emoji';

interface EmojiObject {
    id: number,
    url: string
}

export default function Emojis() {
    const [emojis, setEmojis] = useState<EmojiObject[]>([]);

    const createEmoji = (emojiURL: string) => {
        setEmojis(prev => {
            const id = Date.now();
            return [
                ...prev,
                {
                    id: id,
                    url: emojiURL,
                }

            ]
        });
    }

    const handleDelete = (id: number) => {
        setEmojis(prev => prev.filter(item => item.id !== id));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            createEmoji("/floatingemojis/flower.png")
        }, 300);
        return () => clearInterval(interval);
    }, []);


    return <div className="w-screen h-screen absolute overflow-hidden -z-10 blur-[3px]">
        {emojis.map(item =>
            <Emoji
                key={item.id}
                imageURL={item.url}
                handleDelete={() => {
                    handleDelete(item.id);
                }}
                velX={Math.random()*3+0.5}
                velY={Math.random()*3+0.5}>
            </Emoji>
        )}
    </div>

}