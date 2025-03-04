import React from 'react';
import './Recommendations.css';
import recmImage from '../images/recm.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <img src={recmImage} alt="Recommendation Letter" className="recommendation-image" />
      </div>
    </div>
  );
};

export default Recommendations;