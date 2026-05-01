import { PropsWithChildren } from "react";

export default function Terminal(props: PropsWithChildren) {

    return <div className="w-[550px] h-fit flex justify-center flex-col bg-gray-300 p-5 z-10">
        {props.children}
    </div>

}