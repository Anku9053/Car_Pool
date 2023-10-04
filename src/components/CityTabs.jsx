// CityTabs.js
import React from 'react';

function CityTabs({ cities, activeCity, onTabClick }) {
  return (
    <div className="city-tabs">
      {cities.map((city) => (
        <button
          key={city.id}
          className={city.id === activeCity.id ? 'active' : ''}
          onClick={() => onTabClick(city)}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default CityTabs;
