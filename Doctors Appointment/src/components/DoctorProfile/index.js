import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch('/doctors.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((doc) => doc.id === parseInt(id));
        setDoctor(found);
      });
  }, [id]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <img src={doctor.image} alt={doctor.name} className="profile-image" />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p className={`status ${doctor.availability.toLowerCase().replace(/ /g, '-')}`}>
        {doctor.availability}
      </p>
      <h3>Availability Schedule</h3>
      <ul>
        {Object.entries(doctor.schedule).map(([day, time]) => (
          <li key={day}><strong>{day}:</strong> {time}</li>
        ))}
      </ul>
      <button onClick={() => navigate(`/appointment/${doctor.id}`)}>Book Appointment</button>
    </div>
  );
};

export default DoctorProfile;