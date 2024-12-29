import React from 'react'
import "../RelatedCourse/RelatedCourseSec.css"
import cards from "../../Assets/cards-image.png"
import { Link } from 'react-router-dom'

const RelatedCourseSec = () => {
  return (
    <section className="courses-sec">
            <div className="container-xl">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2>Related Courses</h2>
                    </div>
                    <div className="col-12">
                        <div className="hb-carousel">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="hb-cards text-center">
                                        <Link to="/" className="img-box clip-path position-relative d-block">
                                            <img src={cards} alt="cards image"/>
                                            <div
                                                className="text-white overlay d-flex align-items-center justify-content-center">
                                                <span className="d-block">View Details</span>
                                            </div>
                                        </Link>
                                        <div className="content-box">
                                            <Link to="/">
                                                <p>Course 1</p>
                                                <p> Alignment and Suspension Fundamentals</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="hb-cards text-center">
                                        <Link to="/" className="img-box clip-path position-relative d-block">
                                            <img src={cards} alt="cards image"/>
                                            <div
                                                className="text-white overlay d-flex align-items-center justify-content-center">
                                                <span className="d-block">View Details</span>
                                            </div>
                                        </Link>
                                        <div className="content-box">
                                            <Link to="/">
                                                <p>Course 1</p>
                                                <p> Alignment and Suspension Fundamentals</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="hb-cards text-center">
                                        <Link to="/" className="img-box clip-path position-relative d-block">
                                            <img src={cards} alt="cards image"/>
                                            <div
                                                className="text-white overlay d-flex align-items-center justify-content-center">
                                                <span className="d-block">View Details</span>
                                            </div>
                                        </Link>
                                        <div className="content-box">
                                            <Link to="/">
                                                <p>Course 1</p>
                                                <p> Alignment and Suspension Fundamentals</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default RelatedCourseSec