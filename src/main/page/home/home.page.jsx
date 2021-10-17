import React from 'react'
import ParticleComponent from '../../component/particle/particle.component'
import "./home.style.scss"
import fb from "../../img/contact/facebook_logos_PNG19753.png"
import git from "../../img/contact/github_PNG2.png"
import cv from "../../img/cv_PNG6.png"
import cvFile from "../../img/IT_FRONEND_HOANGLEBAOTHANH.pdf"

export default function Home() {
    window.scrollTo(0, 0)
    return (
        <>
            <ParticleComponent />
            <div className="home__info">
                <h1>Hi, I'm <span>Bao Thanh</span></h1>
                <h3>I'm <span>Front-end Developer</span></h3>
                <h3>It's my honor if i can be a partner with you guys</h3>
                <a href="https://www.facebook.com/Hlb.Thanh98/" target="_blank">
                    <img src={fb} style={{ width: "60px", height: "60px", borderRadius: "50%" }} alt="" />
                </a>
                <a href="https://github.com/baothanh20091998" target="_blank">
                    <img src={git} style={{ marginLeft: "10px", width: "45px", height: "45px", borderRadius: "50%" }} alt="" />
                </a>
                <a href={cvFile} target="_blank">
                    <img src={cv} style={{ marginLeft: "10px", width: "45px", height: "45px", borderRadius: "50%" }} alt="" />
                </a>
            </div>
        </>
    )
}
