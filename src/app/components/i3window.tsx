import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    className?: string;
    /** focused windows get a teal border + slightly more opaque bg (like i3 focus) */
    focused?: boolean;
    /** add default padding; turn off for windows that draw their own chrome (nano) */
    pad?: boolean;
}>;

export default function I3Window({ children, className = "", focused = false, pad = true }: Props) {
    return (
        <div
            className={
                "i3win" +
                (focused ? " i3win-focus" : "") +
                (pad ? " i3win-pad" : "") +
                (className ? " " + className : "")
            }
        >
            {children}
        </div>
    );
}
