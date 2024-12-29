import React from 'react'
import problem from "../../Assets/problem-image.png"
import { Link } from 'react-router-dom'
import "../About/About.css"


const AboutSection1 = () => {
  return (
    <>
    <section className="hb-two-column-sec">
    <div className="container-lg">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="img-box soudos bottom-b">
                    <div className="clip-path">
                        <img src={problem} alt="problem image"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="content-box">
                    <h2>
                        <span className="imp-text">Online</span> Alignment Training
                    </h2>
                    <p className="p-18">Advance your knowledge with the Pro Alignment
                        Team – Specialty Products Company</p>
                    <p>Since 1975 Specialty Products Company has been designing and manufacturing innovative
                        automotive suspension parts and tools. Specialty Products features three product lines
                        that cover a variety of vehicle suspension needs, from traditional automotive alignment
                        and heavy duty truck applications, to cutting edge off-road suspension systems, along
                        with sport compact and rod/race suspension tuning solutions. With our online training
                        classNamees you can advance your knowledge of the skills and craft of automotive alignment.
                        Join us today!</p>
                    <div className="btn-box">
                        <Link to="#" className="btn">Purchase Now!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default AboutSection1