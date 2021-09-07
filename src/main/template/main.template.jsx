import React, { useState } from 'react'
import Header from '../component/header/header.component'
import "./main.style.scss"

export default function MainTemplate(props) {
    const { children } = props
    const [isActiveMenu, setIsActvieMenu] = useState(false)
    const handleShowMenu = () => {
        setIsActvieMenu(!isActiveMenu)
    }
    if (document.querySelector('.header')) {
        if (isActiveMenu) {
            document.querySelector(".header").style.left = "0"
            document.querySelector(".overlay__toggle").style.display = "block"
            document.getElementsByTagName("body")[0].style.overflow = "hidden"
        } else {
            document.querySelector(".header").style.left = "-35%"
            document.querySelector(".overlay__toggle").style.display = "none"
            document.getElementsByTagName("body")[0].style.overflow = "unset"

        }
    }

    const handleCloseMenu = () => {
        if (document.querySelector(".header")) {
            if (isActiveMenu) {
                document.querySelector(".header").style.left = "-35%"
                document.querySelector(".overlay__toggle").style.display = "none"
                document.getElementsByTagName("body")[0].style.overflow = "unset"
            }

        }
    }
    return (
        <>
            <header className="header">
                <Header handleShowMenu={handleShowMenu} handleCloseMenu={handleCloseMenu} />
            </header>
            <div className="overlay__toggle" onClick={() => handleShowMenu()}></div>
            <section className="header__toggle" onClick={() => handleShowMenu()}>
                <div className="header__toggle--item"></div>
                <div className="header__toggle--item"></div>
                <div className="header__toggle--item"></div>
            </section>
            <main>
                {children}
            </main>
        </>
    )
}
