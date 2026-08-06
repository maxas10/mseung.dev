const CONFIG: string[] = [
    "set $mod Mod1",
    "",
    "new_window pixel 1",
    "new_float normal",
    "",
    "hide_edge_borders none",
    "",
    "bindsym $mod+u border none",
    "bindsym $mod+y border pixel 1",
    "bindsym $mod+n border normal",
    "",
    "font xft:URWGothic-Book 11",
    "",
    "floating_modifier $mod",
    "",
    "bindsym $mod+Return exec i3-sensible-terminal",
    "",
    "# Window kill command",
    "bindsym $mod+Shift+q kill",
    "",
    "# start program launcher",
    "bindsym $mod+space exec --no-startup-id rofi -show run",
    "",
    "# change focus",
    "bindsym $mod+j focus left",
    "bindsym $mod+k focus down",
    "bindsym $mod+l focus up",
    "bindsym $mod+semicolon focus right",
    "",
    "bindsym $mod+Left focus left",
    "bindsym $mod+Down focus down",
    "bindsym $mod+Up focus up",
    "bindsym $mod+Right focus right",
    "",
    "# move focused window",
    "bindsym $mod+Shift+j move left",
    "bindsym $mod+Shift+k move down",
    "bindsym $mod+Shift+l move up",
];

const KEYS_TOP = [
    ["^G", "Get Help"],
    ["^O", "Write Out"],
    ["^W", "Where Is"],
    ["^K", "Cut Text"],
    ["^J", "Justify"],
];
const KEYS_BOTTOM = [
    ["^X", "Exit"],
    ["^R", "Read File"],
    ["^\\", "Replace"],
    ["^U", "Uncut Text"],
    ["^T", "To Spell"],
];

function FootRow({ keys }: { keys: string[][] }) {
    return (
        <div className="nano-foot-row">
            {keys.map(([k, label]) => (
                <span key={k}>
                    <span className="nano-key">{k}</span>
                    {label}
                </span>
            ))}
        </div>
    );
}

export default function NanoEditor() {
    return (
        <div className="nano">
            <div className="nano-head">
                <span>GNU nano 2.9.7</span>
                <span>config</span>
                <span>Modified</span>
            </div>
            <div className="nano-body">
                {CONFIG.map((line, i) => (
                    <div key={i} className={line.startsWith("#") ? "nano-comment" : undefined}>
                        {line === "" ? " " : line}
                    </div>
                ))}
                <p className="nano-status">
                    <span>[ Read 272 lines ]</span>
                </p>
            </div>
            <div className="nano-foot">
                <FootRow keys={KEYS_TOP} />
                <FootRow keys={KEYS_BOTTOM} />
            </div>
        </div>
    );
}
