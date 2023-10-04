// Property.js
import React from 'react';

function Property({ match }) {
  // Access the property ID from the URL using match.params
  const propertyId = match.params.id;

  // You can fetch property details based on propertyId here
  // For this example, we'll use mock data
  const property = {
    id: propertyId,
    name: 'Sample Property',
    description: 'This is a sample property description.',
  };

  return (
    <div className="property">
      <h2>{property.name}</h2>
      <p>{property.description}</p>
    </div>
  );
}

export default Property;
