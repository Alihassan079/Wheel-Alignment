import React from 'react'
import Problem from "../../Assets/problem-image.png"
import { Link } from 'react-router-dom';

const CourseInfo = [

    {
        id: 1,
        title: "Course 1 - Alignment and Suspension Fundamentals",
        fee: "$25",
        views: 529,
        image: Problem,
      },
      {
        id: 2,
        title: "Course 2 - Alignment and Suspension Fundamentals",
        fee: "$30",
        views: 340,
        image: Problem,
      },
      {
        id: 3,
        title: "Course 3 - Alignment and Suspension Fundamentals",
        fee: "$35",
        views: 210,
        image: Problem,
      },
      {
        id: 4,
        title: "Course 4 - Alignment and Suspension Fundamentals",
        fee: "$40",
        views: 180,
        image: Problem,
      },
      {
        id: 5,
        title: "Course 5 - Alignment and Suspension Fundamentals",
        fee: "$50",
        views: 300,
        image: Problem,
      },
      {
        id: 6,
        title: "Course 6 - Alignment and Suspension Fundamentals",
        fee: "$28",
        views: 450,
        image: Problem,
      },
];


const CourseColSec = () => {
  return (
    <>
    <section className="hb-two-column-sec hb-courses">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-12 text-center">
                        <h2>Courses We’re Offering</h2>
                        <p className="para">Advance your knowledge with the Pro Alignment Team – Specialty Products Company</p>
                    </div>
                    {CourseInfo.map((course) => (
                        <div className="col-md-6" key={course.id}>
                        <div className="content">
                            <div className="content-box p-0">
                                <div className="img-box overflow-hidden">
                                    <img src={course.image} alt={`${course.title} image`}/>
                                </div>
                                <div className="title-box">
                                    <Link className="btn" to="/">{course.title}</Link>
                                </div>
                            </div>
                            <div className="d-flex p-20 gap-4 align-items-center justify-content-center py-4">
                                <span className="imp-text">Fees: {course.fee}</span>
                                <span>|</span>
                                <span><Link to="/courseDetail"><i className="bi bi-eye"></i> Views {course.views}</Link></span>
                            </div>
                        </div>  
                    </div>
                    ))}
                
                </div>
            </div>
        </section>
        </>
  )
}

export default CourseColSec