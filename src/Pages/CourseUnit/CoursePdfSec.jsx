import React from 'react'

const CoursePdfSec = () => {
  return (
    <section className="hb-pdf-sec overflow-hidden pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-12">
                        <p className="text-center pt-md-5 pt-3 fs-3">View PDF File for Guideline</p>
                        <div className="hb-pdf-container">
                            <div className="pdf-container" id="pdf-container"></div>
                            <div className="pdf-controls d-flex align-items-center">
                                <span className="page-info">Page:
                                    <input type="number" className="ms-3" id="page_num" min="1" />
                                    <span className="px-3"> / </span>
                                    <span id="page_count"></span>
                                </span>
                                <div className="plus-min-box">
                                    <button id="zoom-out">-</button>
                                    <button id="zoom-out"><i className="bi bi-search-heart"></i></button>
                                    <button id="zoom-in">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CoursePdfSec