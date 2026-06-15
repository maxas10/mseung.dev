"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { motion } from "motion/react";
import I3Window from "./i3window";

export default function Desktop({ children }: PropsWithChildren) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    if (pathname?.startsWith("/rivendell") || pathname?.startsWith("/realm")) {
        // full-bleed immersive experiences — escape the i3 tiling entirely
        return <>{children}</>;
    }

    if (isHome) {
        // page.tsx lays out the full i3 tiling scene itself
        return <main className="desktop">{children}</main>;
    }

    // every other route renders inside a single focused window
    return (
        <main className="desktop">
            <motion.div
                className="slot-single i3win i3win-focus i3win-pad"
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
            >
                {children}
            </motion.div>
        </main>
    );
}
