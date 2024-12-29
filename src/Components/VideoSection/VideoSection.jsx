import React from 'react'
import Play from"../../Assets/play.png"
import VideoImg from"../../Assets/video-image.png"
import { Link } from 'react-router-dom'

const VideoSection = () => {
  return (
    <>
    <section className="courses-sec video-sec pt-0">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2><span className="imp-text">Quick</span> Training Videos</h2>
                        <p className="para">Advance your knowledge with the Pro Alignment Team</p>
                    </div>
                    <div className="col-sm-6 position-relative pb-0 py-3">
                        <div className="clip-path">
                            <img src={VideoImg} alt="video image"/>
                        </div>
                        <div className="video-button-container">
                            <Link type="button" data-bs-toggle="modal" data-bs-target="#home_video"
                                className="video-button"><img src={Play} alt="play-button"
                                    className="play-button"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-6 position-relative pb-0 py-3">
                        <div className="clip-path">
                            <img src={VideoImg} alt="video image"/>
                        </div>
                        <div className="video-button-container">
                            <Link type="button" data-bs-toggle="modal" data-bs-target="#home_video"
                                className="video-button"><img src={Play} alt="play-button"
                                    className="play-button"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default VideoSection