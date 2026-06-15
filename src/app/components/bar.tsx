"use client";

import { useEffect, useState } from "react";

function ClockIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function PowerIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6.3 6.3a8 8 0 1 0 11.4 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export default function Bar() {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const time = now
        ? now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
        : "--:--";

    return (
        <header className="bar">
            <div className="bar-left">
                <span className="ws ws-focus">1</span>
                <span className="ws ws-visible">2</span>
                <span className="ws">3</span>
            </div>
            <div className="bar-right">
                <span className="bar-mod bar-mod-hl" suppressHydrationWarning>
                    <ClockIcon /> {time}
                </span>
                <span className="bar-mod bar-power" title="power" aria-label="power">
                    <PowerIcon />
                </span>
            </div>
        </header>
    );
}
