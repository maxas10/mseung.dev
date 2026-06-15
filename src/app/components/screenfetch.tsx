import Link from "next/link";

const ARCH = [
    '                   -`',
    '                  .o+`',
    '                 `ooo/',
    '                `+oooo:',
    '               `+oooooo:',
    '               -+oooooo+:',
    '             `/:-:++oooo+:',
    '            `/++++/+++++++:',
    '           `/++++++++++++++:',
    '          `/+++ooooooooooooo/`',
    '         ./ooosssso++osssssso+`',
    '        .oossssso-````/ossssss+`',
    '       -osssssso.      :ssssssso.',
    '      :osssssss/        osssso+++.',
    '     /ossssssss/        +ssssooo/-',
    '   `/ossssso+/:-        -:/+osssso+-',
    '  `+sso+:-`                 `.-/+oso:',
    ' `++:.                           `-/+/',
    ' .`                                 `/',
].join("\n");

function Row({ k, children }: { k: string; children: React.ReactNode }) {
    return (
        <p>
            <span className="fetch-key">{k}</span> {children}
        </p>
    );
}

export default function Screenfetch() {
    return (
        <div className="fetch">
            <pre className="fetch-logo" aria-hidden="true">{ARCH}</pre>
            <div className="fetch-info">
                <p className="fetch-title">max@mseung.dev</p>
                <p className="fetch-rule">--------------</p>
                <Row k="OS:">Arch Linux x86_64</Row>
                <Row k="Host:">mseung.dev</Row>
                <Row k="Kernel:">Next.js 16.0</Row>
                <Row k="Uptime:">building cool things</Row>
                <Row k="Shell:">TypeScript</Row>
                <Row k="WM:">React</Row>
                <Row k="Theme:">Mountain Mist [Dark]</Row>
                <Row k="Languages:">TypeScript · Python · Java</Row>
                <Row k="Editor:">nano — see config →</Row>
                <p>&nbsp;</p>
                <Row k="GitHub:">
                    <Link href="https://github.com/maxas10">github.com/maxas10</Link>
                </Row>
                <Row k="LinkedIn:">
                    <Link href="https://www.linkedin.com/in/maxseung/">in/maxseung</Link>
                </Row>
                <Row k="Bluesky:">
                    <Link href="https://bsky.app/profile/mseung.bsky.social">@mseung.bsky.social</Link>
                </Row>
                <Row k="Email:">
                    <Link href="/support/">support@mseung.dev</Link>
                </Row>
                <div className="fetch-colors" aria-hidden="true">
                    <span style={{ background: "#1a2024" }} />
                    <span style={{ background: "#c97a6d" }} />
                    <span style={{ background: "#8fc3b3" }} />
                    <span style={{ background: "#cba37e" }} />
                    <span style={{ background: "#6b8f9c" }} />
                    <span style={{ background: "#9a8fc3" }} />
                    <span style={{ background: "#8fc3b3" }} />
                    <span style={{ background: "#c5cfd2" }} />
                </div>
            </div>
        </div>
    );
}
