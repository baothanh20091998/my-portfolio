import React from 'react'
import avatar from '../../img/663_Thanh.jpg'
import "./about--info.style.scss"


export default function AboutInfo() {
    return (
        <div className="about__content--info">
            <h1 className="about__title">ABOUT ME</h1>
            <div className="row">
                <div className="col-12 col-sm-5 info__image">
                    <img src={avatar} alt="" />
                </div>
                <div className="col-12 col-sm-6 info__me">
                    <h3>I'm <span>BAO THANH</span></h3>
                    <div className="row">
                        <div className="col-4">
                            <p>FULL NAME:</p>
                        </div>
                        <div className="col-8">
                            <p>HOANG LE BAO THANH</p>
                        </div>
                        <div className="col-4">
                            <p>AGE:</p>
                        </div>
                        <div className="col-8">
                            <p>23</p>
                        </div>
                        <div className="col-4">
                            <p>NATIONALLY:</p>
                        </div>
                        <div className="col-8">
                            <p>VIETNAM</p>
                        </div>
                        <div className="col-4">
                            <p>ADDRESS:</p>
                        </div>
                        <div className="col-8">
                            <p>219 LO D NGUYEN THIEN THUAT APARTMENT, WARD 1, DISTRICT 3, HO CHI MINH CITY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
