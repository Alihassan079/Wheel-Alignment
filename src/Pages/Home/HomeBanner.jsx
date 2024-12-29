import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../Assets/banner-image.png";
import play from "../../Assets/play.png";
import WatchVideo from "../../Assets/- WATCH VIDEO - WATCH VIDEO  - WATCH VIDEO VIDEO SALE.png";

const HomeBanner = () => {
  const handlePlayButtonClick = (e) => {
    e.preventDefault();
    const videoSection = document.getElementById("video-section");
    if (videoSection) {
      videoSection.scrollIntoView({
        behavior: "smooth", // Enable smooth scrolling
        block: "start", // Align the section at the top of the viewport
      });
    }
  };

  return (
    <section className="banner">
      <div className="container-lg">
        <div className="image-box d-lg-block d-none">
          <img src={banner} alt="banner image" />
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-8 p-lg-0">
            <div className="content-box">
              <h1>We are The Experts in Wheel Alignment Equipment</h1>
              <div className="btn-box">
                <Link to="/" className="btn dark">Get Started!</Link>
              </div>
              <div className="video-button-container">
                <Link to="#video-section" onClick={handlePlayButtonClick} className="video-button">
                  <img src={play} alt="play-button" />
                </Link>
                <div className="rotating-image">
                  <img src={WatchVideo} alt="Rotating Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;