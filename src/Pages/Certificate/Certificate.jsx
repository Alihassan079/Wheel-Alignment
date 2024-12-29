import React from 'react'
import "../Certificate/Certificate.css"
import seal from "../../Assets/Seal.png"


const Certificate = () => {
  return ( 
    <>
     <section className="banner inner-pages mb-0">
    <div className="container-lg">
        <div className="row">
            <div className="col-12">
                <div className="content-box">
                    <h1 className="py-5 text-center mw-100">Certificate</h1>
                </div>
            </div>
        </div>
    </div>
</section>
    <section classNameName="bg-light wavy-bg">
    <div className="certificate-border my-5">
    <div className="inner-border p-5 text-center">

        <div className="title-text mb-4">
            THIS IS TO CERTIFY THAT
        </div>

        <div className="subtitle-text mb-4">
            <span className="d-block">Specialty Products</span>
        </div>

        <div className="title-text mb-4">
            HAS SUCCESSFULLY COMPLETED
        </div>

        <div className="course-text mb-5">
            Course 6-Installer Certification Program
        </div>

        <div className="logo-section">
            <img src={seal} alt="Specialty Products Seal"/>
        </div>

        <div className="date-instructor">
            <div className="d-inline-block">
                <span className="signature-line"></span>
                <p>Date</p>
            </div>

            <div className="d-inline-block mx-5">
                <span className="signature-line"></span>
                <p>Instructor</p>
            </div>
        </div>
    </div>
</div>
</section>
</>
  )
}

export default Certificate