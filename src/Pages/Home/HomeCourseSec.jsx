import React from "react";
import { Link } from "react-router-dom";
import CardsImage from "../../Assets/cards-image.png";

// Reusable CourseCard Component
const CourseCard = ({ image, title, description, link }) => (
  <div className="col-md-4 col-sm-6">
    <div className="hb-cards text-center">
      <Link to={link} className="img-box clip-path position-relative d-block">
        <img src={image} alt={`${title} thumbnail`} className="img-fluid" />
        <div className="text-white overlay d-flex align-items-center justify-content-center">
          <span className="d-block">View Details</span>
        </div>
      </Link>
      <div className="content-box">
        <Link to={link}>
          <p>{title}</p>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  </div>
);

const HomeCourseSec = () => {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Alignment and Suspension Fundamentals",
      image: CardsImage,
      link: "/courseDetail",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Advanced Suspension Techniques",
      image: CardsImage,
      link: "/course-2",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Professional Alignment Training",
      image: CardsImage,
      link: "/course-3",
    },
    {
      id: 4,
      title: "Course 4",
      description: "Steering and Handling Systems",
      image: CardsImage,
      link: "/course-4",
    },
    {
      id: 5,
      title: "Course 5",
      description: "Diagnostics and Repairs Essentials",
      image: CardsImage,
      link: "/course-5",
    },
    {
      id: 6,
      title: "Course 6",
      description: "Complete Vehicle Alignment",
      image: CardsImage,
      link: "/course-6",
    },
  ];

  return (
    <section className="courses-sec backg-light">
      <div className="container-lg">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>Courses We’re Offering</h2>
            <p className="para">
              Advance your knowledge with the Pro Alignment Team – Specialty
              Products Company
            </p>
          </div>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              link={course.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCourseSec;