import React from 'react'
import { Link } from 'react-router-dom'
import problem from "../../Assets/problem-image.png"

const HomeColumnSec1 = () => {
  return (
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
              <h2>We Are Always Ready to
                <span className="imp-text">Help</span> Your Problems
              </h2>
              <p>Since 1975 Specialty Products Company has been designing and manufacturing innovative automotive
                suspension parts and tools . Specialty Products features three product lines that cover a variety of
                vehicle suspension needs, from traditional automotive alignment and heavy duty truck applications, to
                cutting edge off-road suspension systems, along with sport compact and rod/race suspension tuning
                solutions.</p>
              <p>With our online training classNamees you can advance your knowledge of the skills and craft of automotive
                alignment. Join us today!</p>
              <div className="btn-box">
                <Link to="/" className="btn">Join Us Today!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeColumnSec1