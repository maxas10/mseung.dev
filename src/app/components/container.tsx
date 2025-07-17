import React from 'react';


function DynamicContainer({ birthdaypeople, people, colorScheme }: { birthdaypeople: string[][], people: string[], colorScheme: string[] }) {
    return (
        <div className="dynamic-container h-screen w-full">
            <div className="w-full h-screen justify-center items-center flex-col gap-5 absolute top-0" style={{display: birthdaypeople[0] != undefined ? "flex" : "none"}}>
                <h1 className='text-2xl'>Happy Birthday!</h1>
                <div className='flex gap-5'>
                {birthdaypeople.map(([name, date]) => (
                    <div key={name} className="w-[200px] h-[200px] flex justify-center items-center flex-col" style={{ background: colorScheme[Math.floor(Math.random() * colorScheme.length)] }}>
                        <p>{name}</p>
                        <p>{date.charAt(0) + date.charAt(1)}/{date.charAt(2) + date.charAt(3)}</p>
                    </div>
                ))}
                </div>
            </div>

            <div className = "grid gap-3 justify-center" style={{gridTemplateColumns: "repeat(4, auto)", marginTop: birthdaypeople[0] != undefined ? "100vh" : 50}}>
                {people.map(([name, date]) => (
                    <div key={name} className="w-[200px] h-[200px] flex justify-center items-center flex-col" style={{ background: colorScheme[Math.floor(Math.random() * colorScheme.length)] }}>
                        <p>{name}</p>
                        <p>{date.charAt(0) + date.charAt(1)}/{date.charAt(2) + date.charAt(3)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynamicContainer;