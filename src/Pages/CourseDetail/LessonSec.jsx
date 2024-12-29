import React from 'react'
import { Link } from 'react-router-dom'

const LessonSec = () => {
  return (
    <section className="lesson-sec top-tr-soudo backg-light">
    <div className="container-xl">
        <div className="row align-items-center flex-row-reverse">
            <div className="col-12 alert fade show" role="alert">
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0"><span className="imp-text">Lessons:</span> Course 3-Advanced Alignment
                        Diagnostic Angles and Electroni cs</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <Link to="/" className="btn">Mark Complete</Link>
                </div>
            </div>
            <div className="col-12">
                <div className="accordion" id="course_3">
                    <div className="accordion-item">
                        <h4 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#Module_1" aria-expanded="true" aria-controls="Module_1">
                                Module 1: Advanced Diagnosis Angles
                            </button>
                        </h4>
                        <div id="Module_1" className="accordion-collapse collapse show" data-bs-parent="#course_3">
                            <div className="accordion-body">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_1">
                                        <Link to="/">Unit 1 Advanced Alignment Angle Review / Unit Quiz-20
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_1"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_2">
                                        <Link to="/">Unit 2 Advanced Alignment-Steering Axis Inclination / Unit
                                            Quiz-20 Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_2"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_3">
                                        <Link to="/">Unit 3 Advanced Alignment-Scrub Radius / Unit Quiz-12
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_3"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_4">
                                        <Link to="/">Unit 4 Advanced Alignment-Steering Conditions and Diagnosis
                                            / Unit Quiz-15 Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_4"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_5">
                                        <Link to="/">Unit 5 Advanced Alignment-Vehicle Symmetry / Unit Quiz-10
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#Module_2" aria-expanded="false" aria-controls="Module_2">
                                Module 2: Alignment Related Electronics
                            </button>
                        </h4>
                        <div id="Module_2" className="accordion-collapse collapse" data-bs-parent="#course_3">
                            <div className="accordion-body">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_1">
                                        <Link to="/">Unit 1 Advanced Alignment Angle Review / Unit Quiz-20
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_1"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_2">
                                        <Link to="/">Unit 2 Advanced Alignment-Steering Axis Inclination / Unit
                                            Quiz-20 Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_2"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_3">
                                        <Link to="/">Unit 3 Advanced Alignment-Scrub Radius / Unit Quiz-12
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_3"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_4">
                                        <Link to="/">Unit 4 Advanced Alignment-Steering Conditions and Diagnosis
                                            / Unit Quiz-15 Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_4"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_5">
                                        <Link to="/">Unit 5 Advanced Alignment-Vehicle Symmetry / Unit Quiz-10
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#Module_3" aria-expanded="false" aria-controls="Module_3">
                                Module 3: Diagnostics
                            </button>
                        </h4>
                        <div id="Module_3" className="accordion-collapse collapse" data-bs-parent="#course_3">
                            <div className="accordion-body">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_1">
                                        <Link to="/">Unit 1 Advanced Alignment Angle Review / Unit Quiz-20
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_1"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_2">
                                        <Link to="/">Unit 2 Advanced Alignment-Steering Axis Inclination / Unit
                                            Quiz-20 Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_2"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_3">
                                        <Link to="/">Unit 3 Advanced Alignment-Scrub Radius / Unit Quiz-12
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_3"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_4">
                                        <Link to="/">Unit 4 Advanced Alignment-Steering Conditions and Diagnosis
                                            / Unit Quiz-15 Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_4"/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="Unit_5">
                                        <Link to="/">Unit 5 Advanced Alignment-Vehicle Symmetry / Unit Quiz-10
                                            Questions</Link>
                                    </label>
                                    <input className="form-check-input" type="checkbox" id="Unit_5"/>
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

export default LessonSec