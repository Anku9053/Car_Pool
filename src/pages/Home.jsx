// Home.js
import React, { useState, useEffect } from 'react';
import carsData from "../data/CarData.json"
import CarList from '../components/CarList';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

function Home() {
  const [cars, setCars] = useState(carsData.cars);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Pagination logic
  const totalPages = Math.ceil(cars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Handle page change
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle search
  const handleSearch = (searchTerm) => {
    const filteredCars = carsData.cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCars(carsData.cars);
  }, []);

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <CarList cars={currentCars} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}

export default Home;
