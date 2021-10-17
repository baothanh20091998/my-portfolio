import React, { } from 'react'
import avatar from '../../img/663_Thanh.jpg'
import { NavLink } from 'react-router-dom'
import "./header.style.scss"

export default function Header(props) {
    const { handleCloseMenu } = props
    return (
        <>
            <div className="header__avatar">
                <img src={avatar} alt="" />
            </div>

            <ul className="header__menu">
                <li>
                    <NavLink to="/" exact={true} activeClassName="header__active" onClick={() => handleCloseMenu()}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact={true} activeClassName="header__active" onClick={() => handleCloseMenu()}>About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" exact={true} activeClassName="header__active" onClick={() => handleCloseMenu()}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact={true} activeClassName="header__active" onClick={() => handleCloseMenu()}>Contact</NavLink>
                </li>

            </ul>
            <div className="header__year">
                <p>2021 Hoàng Lê Bảo Thành</p>
            </div>
        </>
    )
}
