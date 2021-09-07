import React, { Component } from 'react'
import Particles from 'react-particles-js';

export default class TestPaticles extends Component {

    render() {
        return (
            <Particles
                style={{ backgroundColor: "black" }}
                params={{
                    "particles": {
                        "number": {
                            "value": 200
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        );
    };

}
