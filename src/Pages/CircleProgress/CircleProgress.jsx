import React from 'react';
import '../CircleProgress/CircleProgress.css'; 
import VerticalNav from '../../Components/VerticleNav/VerticleNav';

const CircleProgress = ({ percentage }) => {
  return (
    <>
    <section className="d-flex justify-content-center align-items-center vh-100">
    <div className="progress-container">
      <div className="progress-circle" style={{ '--percentage': `${percentage}%` }}>
        <div className="progress-text">{percentage}%</div>
      </div>
    </div>

    <VerticalNav/>
    </section>
    </>
  );
};

export default CircleProgress;