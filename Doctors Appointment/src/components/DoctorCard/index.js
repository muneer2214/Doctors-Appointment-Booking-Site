import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/doctor/${doctor.id}`);
  };

  return (
    <div className="doctor-card" onClick={handleClick}>
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div>
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p className={`status ${doctor.availability.toLowerCase().replace(/ /g, '-')}`}>
          {doctor.availability}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;