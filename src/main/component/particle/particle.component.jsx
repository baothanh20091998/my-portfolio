import Particles from 'react-particles-js';
import "./particle.style.scss"
import React, { useEffect, useState } from 'react'

export default function TestPaticles() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        windowResize()
    }, [window.innerWidth])
    const windowResize = () => {
        let widthB = window.innerWidth
        setWidth(widthB)
    }
    let setting = {
        "particles": {
            "number": {
                "value": 120
            },
            "size": {
                "value": 3
            },

            "opacity": {
                "random": true
            },
            "move": {
                "speed": 5,
                "random": true
            },
            "line_linked": {
                "color": "#000000"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
            }
        },
    }
    if (width < 768) {
        setting = {
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                },

                "opacity": {
                    "random": true
                },
                "move": {
                    "speed": 5,
                    "random": true
                },
                "line_linked": {
                    "color": "#000000"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                }
            },
        }
    }
    window.addEventListener("resize", () => windowResize())
    return (
        <>
            <Particles
                params={setting} />
        </>
    )
}
