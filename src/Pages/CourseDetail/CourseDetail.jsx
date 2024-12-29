import React from 'react'
import "../CourseDetail/CourseDetail.css"
import LessonSec from './LessonSec'
import RelatedCourseSec from '../../Components/RelatedCourse/RelatedCourseSec'
import TopFooter from '../../Components/TopFooter/TopFooter'
import ModalSection from '../../Components/VideoSection/ModalSection'

const CourseDetail = () => {
  return (
    <>
    <ModalSection/>
    <section className="banner inner-pages mb-0">
    <div className="container-xl">
        <div className="row">
            <div className="col-12">
                <div className="content-box">
                    <h1 className="py-5 text-center"><span className="imp-text">Course 3</span>-Advanced Alignment
                        Diagnostic Angles and Electronics</h1>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="hb-two-column-sec">
<div className="container-xl">
    <h1>GeeksforGeeks</h1>
    <h3>Embedding the PDF file Using Iframe Tag</h3>
    <iframe className="pdf" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
        width="800" height="500">
    </iframe>
</div>
</section>
<LessonSec/>
<RelatedCourseSec/>
<TopFooter/>
</>
  )
}

export default CourseDetail