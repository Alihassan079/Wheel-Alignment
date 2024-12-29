import React from 'react'
import { Link } from 'react-router-dom'
import video from "../../Assets/video-image.png"
import play from "../../Assets/play.png"
import WatchgVideo from "../../Assets/- WATCH VIDEO - WATCH VIDEO  - WATCH VIDEO VIDEO SALE.png"

const HomeVideoSec = () => {
  document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('home_video');
    modal.addEventListener('shown.bs.modal', function () {
        var video = modal.querySelector('video');
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    });
});
  return (
    <section id="video-section" className="video-section top-tr-soudo" >
    <div className="container-lg">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center"><span className="imp-text">Quick</span> Training Video</h2>
        </div>
        <div className="col-12">
          <div className="soudos">
            <div className="clip-path">
              <img src={video} alt="video image"/>
            </div>
          </div>
          <div className="video-button-container">
            <Link type="button" data-bs-toggle="modal" data-bs-target="#home_video" className="video-button"><img
                src={play} alt="play-button" className="play-button"/></Link>
            <div className="rotating-image">
              <img src={WatchgVideo} alt="Rotating Image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeVideoSec