import React from 'react'
import "./about.style.scss"
import AboutInfo from '../../component/about--info/about-info.component'
import AboutSkill from '../../component/about--skill/about-skill.component'
import AboutHobbies from '../../component/about--hoobies/about-hoobies.component'

export default function About() {
    const scrollView = () => {
        const height = window.scrollY
        if (document.querySelector(".skill__content")) {
            height > 250 ?
                document.querySelector(".skill__content").style.opacity = 1 :
                document.querySelector(".skill__content").style.opacity = 0
        }
        if (document.querySelector(".hobbies__content")) {
            height > 630 ?
                document.querySelector(".hobbies__content").style.opacity = 1 : document.querySelector(".hobbies__content").style.opacity = 0
        }

    }
    window.addEventListener("scroll", scrollView)
    return (
        <section className="about">
            <div className="about__content">
                <AboutInfo />
                <AboutSkill />
                <AboutHobbies />
            </div>
        </section>
    )
}
