import React from 'react'
import { skillImg } from '../../config/skill.config'
import "./about-skill.style.scss"

export default function AboutSkill() {
    const renderSkillImg = skillImg.map((img, index) => (
        <div className="skill__item" key={index}>
            <p>{img.name}</p>
            <img src={img.src} style={{ width: "50px", height: "50px" }} alt="" />
        </div>
    ))
    return (
        <div className="about__content--skill">
            <h1>SKILL</h1>
            <div className="skill__content">
                {renderSkillImg}
            </div>
        </div>
    )
}
