import React from 'react'
import "./portfolio.style.scss"
import { portfolioSrc } from '../../config/portfolio.config'

export default function Portfolio() {
    const renderListProject = portfolioSrc.map(project => (
        <div className="portfolio__item">
            <img src={project.srcImg} alt="" />
            <a href={project.web} target="_blank" className="portfolio__item--title">{project.title}</a>
            <p className="portfolio__item--info">{project.content}</p>
            <div className="portfolio__item--overlay">
                <a href={project.srcGit} target="_blank">
                    <button>Github</button>
                </a>
                <a href={project.web} target="_blank">
                    <button>Demo</button>
                </a>
            </div>
        </div>
    ))
    return (
        <section className="portfolio">
            <div className="portfolio__content">
                <h1 className="portfolio__content--title">Portfolio<span>Portfolio</span></h1>
                <div className="portfolio__content--item">
                    {renderListProject}
                </div>
            </div>
        </section>
    )
}
