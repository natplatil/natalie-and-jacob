import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstVisitPopup.css';

const FirstVisitPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      setShowPopup(true);
      // Mark that user has visited
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  const handleGoToMailInvitations = () => {
    setShowPopup(false);
    navigate('/address-collection');
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={handleClose}>
          ×
        </button>
        <div className="popup-header">
          <h2>Welcome to Our Wedding Website!</h2>
        </div>
        <div className="popup-body">
          <p>
            We're so excited to celebrate with you! If you'd like to receive a cute paper invite to put on your fridge,
              please share your address with us.
          </p>
          <p>
            Don't worry - we'll also be sending a beautiful save-the-date card 
            digitally!
          </p>
        </div>
        <div className="popup-actions">
          <button 
            className="popup-btn primary" 
            onClick={handleGoToMailInvitations}
          >
            Share My Address
          </button>
          <button 
            className="popup-btn secondary" 
            onClick={handleClose}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstVisitPopup;