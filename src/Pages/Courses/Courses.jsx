import React from 'react'
import "../Courses/Courses.css"
import CourseColSec from './CourseColSec'
import CourseInsidePage from './CourseInsidePage'
import VideoSection from '../../Components/VideoSection/VideoSection'
import TopFooter from '../../Components/TopFooter/TopFooter'
import ModalSection from '../../Components/VideoSection/ModalSection'

const Courses = () => {
  return (
    <>
    <ModalSection/>
    <section className="banner inner-pages mb-0">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="content-box">
                            <h1 className="py-5 text-center mw-100">Courses</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <CourseColSec/>
        <CourseInsidePage/>
        <VideoSection/>
        <TopFooter/>
        </>
  )
}

export default Courses