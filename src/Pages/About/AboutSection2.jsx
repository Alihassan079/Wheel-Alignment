import React from 'react'
import problem from"../../Assets/problem-image.png" 



import { Link } from 'react-router-dom'

const AboutSection2 = () => {
  return (
    <>
    <section className="hb-two-column-sec top-tr-soudo backg-light">
            <div className="container-lg">
                <div className="row align-items-center flex-row-reverse">
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
                                <span className="imp-text">Pro</span> Alignment Team
                            </h2>
                            <p className="p-18">Certified Instructors – Real Results</p>
                            <p>Our knowledgeable, trained and certified instructor team has specifically created these
                                courses to meet the demanding needs of today’s alignment technician. With courses from
                                basic to advanced teh WheelAlignmentTraining.com site, along with SPC Alignment has the
                                courses necessary for tech’s to stay ahead of the curve.</p>
                            <div className="btn-box">
                                <Link to="#" className="btn">Start Your Training</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default AboutSection2