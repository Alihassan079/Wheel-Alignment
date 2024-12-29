import React from 'react'
import problem from"../../Assets/problem-image.png" 
import { Link } from 'react-router-dom'

const AboutSection3 = () => {
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
                    <h2>Right Part, <span className="imp-text">Right</span> Now</h2>
                    <p className="p-18">SPC Alignment is the industry leader in alignment parts.
                        Visit our website for the largest selection of alignment
                        aids.</p>
                    <p>Car on the rack? Project car ready for suspension? Be sure to visit our website at
                        www.SPCAlignment.com to search for the latest parts and tools. Along with our extensive
                        catalog you will also find pictures, video installs and printable instructions sheets.
                        with SPC, you have the right part…right now.</p>
                    <div className="btn-box">
                        <Link to="#" className="btn">Join Us Today!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default AboutSection3