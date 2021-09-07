import React from 'react'
import { hobbiesSrc } from '../../config/hobbies.config'
import "./about-hobbies.style.scss"

export default function AboutHobbies() {
    const renderHobbies = hobbiesSrc.map((hobby, index) => (
        <div className="hobbies__item" key={index}>
            <h3>{hobby.title}</h3>
            <hr />
            <img src={hobby.src} style={{ width: "50px", height: "50px" }} alt="" />
            <div className="hobbies__overlay">
                <p>{hobby.content}</p>
            </div>
        </div>
    ))
    return (
        <div className="about__content--hobbies">
            <h1>HOBBIES</h1>
            <div className="hobbies__content">
                {renderHobbies}
            </div>
        </div>
    )
}
