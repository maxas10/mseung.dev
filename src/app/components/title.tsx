import Link from "next/link";
import React from "react";

type TitleProps = {
    page: string;
}

export default function Title(props: TitleProps) {
    if (props.page == "") {
        return <div>
            <p>MSEUNG.dev [Version 1.0.6]</p>
            <br />
        </div>
    } else {
        return <>
            <div className="flex flex-row gap-2">
                <Link href="/">MSEUNG.dev [Version 1.0.6]</Link>
                <p> &rarr; {props.page}</p>
            </div>
            <br />
        </>
    }
}