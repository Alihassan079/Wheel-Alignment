import React, { useEffect, useRef } from 'react';
import video from "../../Assets/wheel-video.mov";

const ModalSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const modal = document.getElementById('home_video');
    const handleShown = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Reset video to the beginning
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error); // Handle playback issues
        });
      }
    };

    const handleHidden = () => {
      if (videoRef.current) {
        videoRef.current.pause(); // Pause the video when modal closes
      }
    };

    modal.addEventListener('shown.bs.modal', handleShown);
    modal.addEventListener('hidden.bs.modal', handleHidden);

    return () => {
      modal.removeEventListener('shown.bs.modal', handleShown);
      modal.removeEventListener('hidden.bs.modal', handleHidden);
    };
  }, []);

  return (
    <section className="modal-section">
      <div
        className="modal fade"
        id="home_video"
        tabIndex="-1"
        aria-labelledby="home_videoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog h-100 pb-5 mw-100">
          <div className="modal-body h-100 mw-100">
            <video
              ref={videoRef}
              loop
              muted
              width="100%"
              height="100%"
              controls
              style={{ outline: 'none' }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalSection;