// CarCard.js
import React from 'react';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.make} {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
    </div>
  );
}

export default CarCard;
