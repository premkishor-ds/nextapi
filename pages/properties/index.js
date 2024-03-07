// pages/properties/index.js
import React from 'react';
import PropertyList from '../../components/PropertyList.js';
import { getAllProperties } from '../../utils/api';

const PropertiesPage = ({ properties }) => {
    console.log(properties,"propertiesproperties")
  return (
    <div>
      <h1>Properties</h1>
      <PropertyList properties={properties} />
    </div>
  );
};

PropertiesPage.getInitialProps = async () => {
  try {
    const properties = await getAllProperties();
    return { properties };
  } catch (error) {
    console.error('Error fetching properties:', error.message);
    return { properties: [] };
  }
};

export default PropertiesPage;
