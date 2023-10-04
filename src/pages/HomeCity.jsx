// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import hotelsData from '../data/CitiesData.json';
import CityTabs from '../components/CityTabs';
import HotelCard from '../components/HotelCard';

function HomeCity() {
  const [activeCity, setActiveCity] = useState(hotelsData.cities[0]);
  const [visibleHotels, setVisibleHotels] = useState(activeCity.hotels.slice(0, 3));
  const history = useNavigate(); // Initialize history

  const loadMoreHotels = () => {
    const newVisibleHotels = activeCity.hotels.slice(0, visibleHotels.length + 3);
    setVisibleHotels(newVisibleHotels);
  };

  const handleCardClick = (hotelId) => {
    // Navigate to the property page with the selected hotel's ID
    history(`/property/${hotelId}`);
  };

  const handleTabClick = (city) => {
    setActiveCity(city);
    setVisibleHotels(city.hotels.slice(0, 3));
  };

  return (
    <div className="home">
      <CityTabs cities={hotelsData.cities} activeCity={activeCity} onTabClick={handleTabClick} />
      <div className="hotel-list">
        {visibleHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onCardClick={handleCardClick} />
        ))}
      </div>
      <button onClick={loadMoreHotels}>Show More</button>
    </div>
  );
}

export default HomeCity;
