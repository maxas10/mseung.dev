import Link from "next/link";
import React from "react";

type TitleProps = {
    page: string;
    pagesrc?: string;
    page2?: string;
}

export default function Title(props: TitleProps) {
    if (props.page == "") {
        return <div>
            {/* <p>MSEUNG.dev [Version 1.0.6]</p> */}
            <br />
        </div>
    } else {
        return <>
            <div className="flex flex-row gap-2">
                {/* <Link href="/">MSEUNG.dev [Version 1.0.6]</Link>
                &rarr; */}
                {props.pagesrc ? <Link href={props.pagesrc}> {props.page}</Link> : <p> {props.page}</p>}
                {props.page2 && <p> &rarr; {props.page2}</p>}
            </div>
            <br />
        </>
    }
}