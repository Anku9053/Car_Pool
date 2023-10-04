// HotelCard.js
import React from 'react';

function HotelCard({ hotel, onCardClick }) {
  return (
    <div className="hotel-card" onClick={() => onCardClick(hotel.id)}>
      <img src={hotel.image} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>{hotel.description}</p>
    </div>
  );
}

export default HotelCard;
