import React from 'react'
import "../CourseUnit/CourseUnit.css"
import CoursePdfSec from './CoursePdfSec'
import CourseUnitBox from './CourseUnitBox'

const CourseUnit = () => {
  return (
    <>
    <section className="banner inner-pages mb-0">
    <div className="container-xl">
        <div className="row">
            <div className="col-12">
                <div className="content-box">
                    <h1 className="py-5 text-center px-lg-5"><span className="imp-text">Course Unit</span>-Advanced
                        Alignment Angle Review</h1>
                </div>
            </div>
        </div>
    </div>
</section>
<CoursePdfSec/>
<CourseUnitBox/>

</>
  )
}

export default CourseUnit