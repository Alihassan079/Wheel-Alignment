import React from 'react'
import { Link } from 'react-router-dom'

const CourseUnitBox = () => {
  return (
    <section className="unit-box pb-md-5 mb-md-5 pb-3">
    <div className="container">
        <h4 className="mb-3">Advanced Alignment Angle Overview</h4>
        <p>You'll need to correctly answer at least 14 of the 20 questions below (at least 70%) to progress to
            the next unit.</p>
        <form>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #1 - Directional stability is one of the major purposes of which
                    alignment angle?</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="Camber"/>
                        <label className="form-check-label" htmlFor="Camber">
                            <Link to="/">Camber</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="Caster"/>
                        <label className="form-check-label" htmlFor="Caster">
                            <Link to="/">Caster</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="Toe"/>
                        <label className="form-check-label" htmlFor="Toe">
                            <Link to="/">Toe</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="Conicity"/>
                        <label className="form-check-label" htmlFor="Conicity">
                            <Link to="/">Conicity</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #2 - Which alignment angle is changed when the upper ball joint is moved rearward?</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="Camber"/>
                        <label className="form-check-label" htmlFor="Camber">
                            <Link to="/">Camber</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="Caster"/>
                        <label className="form-check-label" htmlFor="Caster">
                            <Link to="/">Caster</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="Toe"/>
                        <label className="form-check-label" htmlFor="Toe">
                            <Link to="/">Toe</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="Conicity"/>
                        <label className="form-check-label" htmlFor="Conicity">
                            <Link to="/">Conicity</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #3 - Cross Caster is:</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="tptobt"/>
                        <label className="form-check-label" htmlFor="tptobt">
                            <Link to="/">The difference in caster from top to bottom.</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="sdtosd"/>
                        <label className="form-check-label" htmlFor="Caster">
                            <Link to="/">The difference in caster from side to side.</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="saimin"/>
                        <label className="form-check-label" htmlFor="saimin">
                            <Link to="/">SAI minus camber</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #4 - A vehicle will pull to the side with the least positive camber.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true"/>
                        <label className="form-check-label" htmlFor="true">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false"/>
                        <label className="form-check-label" htmlFor="false">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #5 - A vehicle will pull to the side with the most positive caster.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-2"/>
                        <label className="form-check-label" htmlFor="true-2">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-2"/>
                        <label className="form-check-label" htmlFor="false-2">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #6 - Positive camber will wear the inside of the tire.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-3"/>
                        <label className="form-check-label" htmlFor="true-3">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-3"/>
                        <label className="form-check-label" htmlFor="false-3">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #7 - Positive caster is the rearward tilt of the steering axis.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-4"/>
                        <label className="form-check-label" htmlFor="true-4">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-4"/>
                        <label className="form-check-label" htmlFor="false-4">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #8 - Frame angle will directly affect caster readings.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-5"/>
                        <label className="form-check-label" htmlFor="true-5">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-5"/>
                        <label className="form-check-label" htmlFor="false-5">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #9 - Standard shock absorbers will not affect vehicle ride height.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-6"/>
                        <label className="form-check-label" htmlFor="true-6">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-6"/>
                        <label className="form-check-label" htmlFor="false-6">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #10 - Technician A says rear camber and toe may need to be adjusted at the same time. Technician B 
                    says rear camber and toe are not always adjustable. Who is correct?</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="tc-a"/>
                        <label className="form-check-label" htmlFor="tc-a">
                            <Link to="/">Technician A</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="tc-b"/>
                        <label className="form-check-label" htmlFor="tc-b">
                            <Link to="/">Technician B</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="both-ab"/>
                        <label className="form-check-label" htmlFor="both-ab">
                            <Link to="/">Both A and B</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="ny-ab"/>
                        <label className="form-check-label" htmlFor="ny-ab">
                            <Link to="/">Neither A nor B</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #11 - Shifting a subframe or cradle can equalize camber side to side.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-7"/>
                        <label className="form-check-label" htmlFor="true-7">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-7"/>
                        <label className="form-check-label" htmlFor="false-7">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #12 - The rear toe angle will not wear tires as much as front toe.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-8"/>
                        <label className="form-check-label" htmlFor="true-8">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-8"/>
                        <label className="form-check-label" htmlFor="false-8">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #13 - Heat may be applied to help loosen toe adjusters.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-9"/>
                        <label className="form-check-label" htmlFor="true-9">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-9"/>
                        <label className="form-check-label" htmlFor="false-9">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #14 - The thrust line is a bisector of rear toe.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-10"/>
                        <label className="form-check-label" htmlFor="true-10">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-10"/>
                        <label className="form-check-label" htmlFor="false-10">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #15 - On most modern alignment equipment, rear toe determines where front toe is set.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-11"/>
                        <label className="form-check-label" htmlFor="true-11">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-11"/>
                        <label className="form-check-label" htmlFor="false-11">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #16 - Two technicians are discussing a pulling problem after an alignment. Technician A says there 
                    might be a thrust angle problem. Technician B says the alignment equipment may not have been mounted 
                    properly. Who is correct?</p>
                    <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                        <div className="form-check-box">
                            <input className="form-check-input" type="checkbox" id="tc-a-2"/>
                            <label className="form-check-label" htmlFor="tc-a-2">
                                <Link to="/">Technician A</Link>
                            </label>
                        </div>
                        <div className="form-check-box">
                            <input className="form-check-input" type="checkbox" id="tc-b-2"/>
                            <label className="form-check-label" htmlFor="tc-b-2">
                                <Link to="/">Technician B</Link>
                            </label>
                        </div>
                        <div className="form-check-box">
                            <input className="form-check-input" type="checkbox" id="both-ab-2"/>
                            <label className="form-check-label" htmlFor="both-ab-2">
                                <Link to="/">Both A and B</Link>
                            </label>
                        </div>
                        <div className="form-check-box">
                            <input className="form-check-input" type="checkbox" id="ny-ab-2"/>
                            <label className="form-check-label" htmlFor="ny-ab-2">
                                <Link to="/">Neither A nor B</Link>
                            </label>
                        </div>
                    </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #18 - Increasing cross camber or caster may be needed to help eliminate a pull or drift.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-12"/>
                        <label className="form-check-label" htmlFor="true-12">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-12"/>
                        <label className="form-check-label" htmlFor="false-12">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #19 - Positive thrust angle may cause a vehicle to pull left.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-13"/>
                        <label className="form-check-label" htmlFor="true-13">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-13"/>
                        <label className="form-check-label" htmlFor="false-13">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-check">
                <p className="col-12 mb-md-3 mb-2">Question #20 - Improperly adjusted front toe can make a vehicle pull to the left.</p>
                <div className="gap-lg-5 gap-md-4 gap-3 d-flex align-items-center flex-wrap">
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="true-14"/>
                        <label className="form-check-label" htmlFor="true-14">
                            <Link to="/">True</Link>
                        </label>
                    </div>
                    <div className="form-check-box">
                        <input className="form-check-input" type="checkbox" id="false-14"/>
                        <label className="form-check-label" htmlFor="false-14">
                            <Link to="/">False</Link>
                        </label>
                    </div>
                </div>
            </div>    
            <div className="pt-3 btn-box d-flex align-items-center gap-3 col-md-6">
                <div className="dark-btn w-50">
                    <Link to="/" className="btn dark w-100">Submit Answers</Link>
                </div>
                <div className="light-btn w-50">
                    <Link to="/" className="btn w-100">Next Unit</Link>
                </div>
            </div>                
        </form>
    </div>
</section>
  )
}

export default CourseUnitBox