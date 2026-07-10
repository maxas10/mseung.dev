import { PropsWithChildren } from "react";

export default function Terminal(props: PropsWithChildren) {
    return (
        <section className="terminal" aria-label="Portfolio terminal">
            <header className="terminal-titlebar">
                <div className="terminal-controls" aria-hidden="true">
                    <span className="terminal-control terminal-control-close" />
                    <span className="terminal-control terminal-control-minimize" />
                    <span className="terminal-control terminal-control-maximize" />
                </div>
                <p className="terminal-title">max@mseung: ~</p>
                <span className="terminal-title-spacer" aria-hidden="true" />
            </header>
            <div className="terminal-body">
                <p className="terminal-command" aria-hidden="true">
                    <span className="terminal-prompt">max@mseung:~$</span> ./portfolio
                </p>
                {props.children}
            </div>
        </section>
    );

}
