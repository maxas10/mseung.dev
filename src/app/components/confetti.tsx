"use client";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";

export default function Confetti() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            "fullScreen": {
                "zIndex": -1
            },
            "particles": {
                "number": {
                    "value": 0
                },
                "color": {
                    "value": [
                        "#FF0000",
                        "#FFA500",
                        "#FFFF00",
                        "#008000",
                        "#0000FF",
                        "#4B0082",
                        "#EE82EE",
                    ]
                },
                "shape": {
                    "type": [
                        "circle",
                        "square"
                    ],
                    "options": {}
                },
                "opacity": {
                    "value": {
                        "min": 0,
                        "max": 1
                    },
                    "animation": {
                        "enable": true,
                        "speed": 2,
                        "startValue": "max",
                        "destroy": "min"
                    }
                },
                "size": {
                    "value": {
                        "min": 2,
                        "max": 4
                    }
                },
                "links": {
                    "enable": false
                },
                "life": {
                    "duration": {
                        "sync": true,
                        "value": 5
                    },
                    "count": 1
                },
                "move": {
                    "enable": true,
                    "gravity": {
                        "enable": true,
                        "acceleration": 10
                    },
                    "speed": {
                        "min": 20,
                        "max": 30
                    },
                    "decay": 0.1,
                    "direction": "none",
                    "straight": false,
                    "outModes": {
                        "default": "destroy",
                        "top": "none"
                    }
                },
                "rotate": {
                    "value": {
                        "min": 0,
                        "max": 360
                    },
                    "direction": "random",
                    "move": true,
                    "animation": {
                        "enable": true,
                        "speed": 60
                    }
                },
                "tilt": {
                    "direction": "random",
                    "enable": true,
                    "move": true,
                    "value": {
                        "min": 0,
                        "max": 360
                    },
                    "animation": {
                        "enable": true,
                        "speed": 60
                    }
                },
                "roll": {
                    "darken": {
                        "enable": true,
                        "value": 25
                    },
                    "enable": true,
                    "speed": {
                        "min": 15,
                        "max": 25
                    }
                },
                "wobble": {
                    "distance": 30,
                    "enable": true,
                    "move": true,
                    "speed": {
                        "min": -15,
                        "max": 15
                    }
                }
            },
            "emitters": {
                "life": {
                    "count": 100,
                    "duration": 0.1,
                    "delay": 0.3
                },
                "rate": {
                    "delay": 0.1,
                    "quantity": 200
                },
                "size": {
                    "width": 0,
                    "height": 0
                }
            }

        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }
    return <></>;
}