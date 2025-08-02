import React, { useEffect, useState } from 'react';
import DoctorsList from '../DoctorsList';
import SearchBar from '../SearchBar';
import './index.css';

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    fetch('/doctors.json')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setFilteredDoctors(data);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = doctors.filter(doc =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div className="home-container">
      <SearchBar onSearch={handleSearch} />
      <DoctorsList doctors={filteredDoctors} />
    </div>
  );
};

export default Home;
