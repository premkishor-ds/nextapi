// components/PropertyDetail.js
import React from 'react';

const PropertyDetail = ({ property }) => {
  return (
    <div>
      <h2>Property Detail</h2>
      <h3>{property.title}</h3>
      <p>{property.brand}</p>
      {/* <p>Price: ${property.price}</p> */}
      {/* Add more details as needed */}
    </div>
  );
};

export default PropertyDetail;
