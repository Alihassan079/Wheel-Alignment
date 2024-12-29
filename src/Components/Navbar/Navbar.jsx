import React, { useEffect } from 'react';
import "../Navbar/Navbar.css";
import NLogo from "../../Assets/Logo.png";
import { Link, NavLink } from 'react-router-dom';

const NavbarItems = [
  { id: 1, name: "Courses", link: "/courses" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Privacy", link: "/privacy" },
];

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('bg-dark');
      } else {
        header.classList.remove('bg-dark');
      }
    };

    const handleVideoModal = () => {
      const modal = document.getElementById('home_video');
      if (modal) {
        modal.addEventListener('shown.bs.modal', () => {
          const video = modal.querySelector('video');
          if (video) {
            video.currentTime = 0;
            video.play();
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('DOMContentLoaded', handleVideoModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('DOMContentLoaded', handleVideoModal);
    };
  }, []);

  return (
    <header className="main-header fixed-top" id="header">
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-lg">
          <Link className="navbar-brand" to="/">
            <img src={NLogo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bg-white"></span>
            <span className="bg-white"></span>
            <span className="bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto">
              {NavbarItems.map((data) => (
                <li className="nav-item" key={data.id}>
                  <NavLink
                    className="nav-link"
                    to={data.link}
                    activeClassName="active"
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <form className="d-lg-flex align-items-center" role="search">
              <div className="form-sec d-flex align-items-center">
                <label htmlFor="courses_search">
                  <i className="bi bi-search"></i>
                </label>
                <input
                  className="form-control border-0"
                  id="courses_search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className="login-form">
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    <i className="bi bi-person-fill-add"></i>
                    <span>Login</span>
                  </Link>
                </li>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
