"use client"

import { useEffect, useState } from "react";
import Title from "../components/title"

export default function Page() {
    const [bank, setBank] = useState(500);
    const [stocks, setStocks] = useState(0);
    const [stockPrice, setStockPrice] = useState(0);

    useEffect(() => {
        update();
    }, [])

    function update() {
        const rand = Math.floor(Math.random() * (5 - 0.1 + 1) + 0.1);
        setStockPrice(Math.floor(Math.random() * 290) + 10);
        setTimeout(update, rand*1000)
    }

    function buy() {
        if (bank >= stockPrice) {
            setBank(bank - stockPrice);
            setStocks(stocks + 1);
        }
    }

    function sell() {
        if (stocks > 0) {
            setBank(bank + stocks * stockPrice);
            setStocks(0);
        }
    }

    return <>
        <Title page="Stock Trading Simulator (Classic)"></Title>
        <div className="flex flex-col w-fit">
            <p>PEAR ${stockPrice}</p>
            <p className="text-green-600">Account Value: ${bank}</p>
            <p className="text-red-700">Qty. of Stocks in PEAR: {stocks}</p>
        </div>
        <div className="flex flex-row w-fit gap-2">
            <button className='text-left cursor-pointer text-red-200 hover:text-white' onClick={buy}>Buy</button>
            <button className='text-left cursor-pointer text-red-200 hover:text-white' onClick={sell}>Sell</button>
        </div>
    </>
}