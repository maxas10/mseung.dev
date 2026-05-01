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
    const [position, setPosition] = useState({x: -50, y: -50});

    const move = () => {
        setPosition(prev => ({x: prev.x+props.velX, y: prev.y+props.velY}));
    }


    useEffect(()=> {
        setInterval(move, 10);
    },[])

    useEffect(() => {
        if (position.x > window.innerWidth || position.y > window.innerHeight) props.handleDelete();
    }, [position])

    return <Image src={props.imageURL} alt="emoji" width={100} height={100} 
        style={{position: "absolute", left: position.x, top: position.y}}
    ></Image>

}