import React from 'react'
import Exclusive from"../../Assets/exclusive.png"


const TopFooter = () => {
  return (
    <section className="tp-footer-sec">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="img-box">
                            <img src={Exclusive} className="mx-auto" alt="exclusive"/>
                        </div>
                        <div className="content-box">
                            <h2><span className="imp-text">Trusted</span> by Professional Alignment
                                Technicians since 1972</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default TopFooter