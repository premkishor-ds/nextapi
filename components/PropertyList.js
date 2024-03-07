// components/PropertyList.js
import React from 'react';
import Link from 'next/link';

const PropertyList = ({ properties }) => {
    console.log(properties,"components")
  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {properties.products.map((property) => (
          <li key={property.id}>{property.title}
            {/* <Link href={`/properties/${property.id}`}>
              <a>{property.title}</a>
            </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
