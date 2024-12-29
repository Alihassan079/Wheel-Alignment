import React from 'react'
import { Link } from 'react-router-dom';
import Flogo from "../../Assets/Logo.png";
import "../Footer/Footer.css"


const contactInfo = [
    { title: "Phone", value: "800-525-6505", linkType: "tel" },
    { title: "Email", value: "custserv@specprod.com", linkType: "mailto" },
    { title: "Web", value: "https://www.spcalignment.com", linkType: "web" },
];

const courses = [
    "Alignment and Suspension Fundamentals",
    "Basic Alignment Procedures and Diagnosis",
    "Advanced Alignment Diagnostic Angles and Electronics",
    "Aligning Altered and Performance Vehicles",
    "Heavy Duty Truck Alignment Training",
    "Installer Certification Program",
  ];

  const socialLinks = [
    { iconClass: "bi bi-twitter", link: "#" },
    { iconClass: "bi bi-facebook", link: "#" },
    { iconClass: "bi bi-youtube", link: "#" },
    { iconClass: "bi bi-instagram", link: "#" },
  ];

  const footerNav = ["Home", "Courses", "About", "Privacy"];

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="top-footer">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="content-box">
                                <div className="footer-logo-box d-lg-none d-block mb-4">
                                    <Link to="#">
                                        <img src={Flogo} alt="footer-logo" />
                                    </Link>
                                </div>
                                <ul className="p-0">
                                    <li className="footer-list-heading">Contact Us</li>
                                    {contactInfo.map((item, index) => (
                                        <li className="footer-list" key={index}>
                                            <span>{item.title}: </span>
                                            <Link to={
                                                item.linkType === "mailto" ? 
                                                `mailto:${item.value}`: 
                                                 item.linkType === "tel" ?
                                                  `tel:${item.value}`:
                                                   item.value
                                            } >
                                            {item.value}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="footer-logo-box d-lg-block d-none">
                                    <Link to="#">
                                        <img src={Flogo} alt="footer-logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="content-box">
                                <ul className="p-0">
                                    <li className="footer-list-heading">Courses</li>
                                    {courses.map((course, index) => (
                                     <li className="footer-list" key={index}><Link to="#">{`${index + 1}. ${course}`}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="content-box">
                                <p className="footer-list-heading text-lg-start text-center">Sign up to get the latest updates
                                    and more …</p>
                                <div className="newsletter-box d-flex">
                                    <input className="form-control" type="email" name="email" id="n_email"
                                        placeholder="Your email address" />
                                    <button type="submit" className="btn dark">Subscribe</button>
                                </div>
                                <ul className="hb-social-box d-flex p-0">
                                    {socialLinks.map((social, index) =>(
                                     <li key={index}><Link to={social.link} ><i className={social.iconClass}></i></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-footer">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-5">
                            <p className="m-0">Specialty Products Company © 2024</p>
                        </div>
                        <div className="col-md-7">
                            <ul

                                className="d-flex gap-md-5 gap-4 justify-content-md-end justify-content-center m-0 mt-md-0 mt-3 ps-0">
                               {footerNav.map((navItem, index)=>(
                               <li className="nav-item" key={index}><Link to="#" className="nav-link">{navItem}</Link></li>
                               ))}
                              
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer