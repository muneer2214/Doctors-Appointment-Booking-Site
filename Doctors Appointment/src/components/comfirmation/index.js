import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h2>Appointment Confirmed!</h2>
      <p>Your appointment has been successfully booked.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default Confirmation;
