import React from 'react'
import problem from "../../Assets/problem-image.png"
import { Link } from 'react-router-dom'



const HomeColumnSec2 = () => {
  return (
    <section className="hb-two-column-sec">
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
              <h2><span className="imp-text">Why</span> Choose Us?</h2>
              <ul className="ch-lists">
                <li><i className="bi bi-check2-circle"></i><span>The leader in automotive alignment</span></li>
                <li><i className="bi bi-check2-circle"></i><span>Taught by real alignment tech’s</span></li>
                <li><i className="bi bi-check2-circle"></i><span>Learn at your own speed</span></li>
                <li><i className="bi bi-check2-circle"></i><span>Receive an industry recognized certificate of
                    completion</span></li>
                <li><i className="bi bi-check2-circle"></i><span>Taught by real alignment tech’s</span></li>
                <li><i className="bi bi-check2-circle"></i><span>Join the ranks of the Pro Alignment Team </span></li>
              </ul>
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

export default HomeColumnSec2