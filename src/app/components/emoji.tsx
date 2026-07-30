"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

type EmojiProps = {
    velX: number,
    velY: number,
    imageURL: string,
    handleDelete: () => void
}

export default function Emoji(props: EmojiProps) {
    const size = 100;
    const [position, setPosition] = useState({x: -size, y: -size});

    const move = () => {
        setPosition(prev => ({x: prev.x+props.velX, y: prev.y+props.velY}));
    }


    useEffect(()=> {
        const interval = setInterval(move, 10);
        return () => clearInterval(interval);
    },[])

    useEffect(() => {
        if (position.x > window.innerWidth || position.y > window.innerHeight) props.handleDelete();
    }, [position])

    return <Image src={props.imageURL} alt="emoji" width={size} height={size} 
        style={{position: "absolute", left: position.x, top: position.y}}
    ></Image>

}