import React from 'react';
import DoctorCard from '../DoctorCard';
import './index.css';

const DoctorsList = ({ doctors }) => {
  return (
    <div className="doctors-list">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;