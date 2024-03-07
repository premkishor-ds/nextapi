// pages/properties/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import PropertyDetail from '../../components/PropertyDetail.js';
import { getPropertyById } from '../../utils/api';

const PropertyDetailPage = ({ property }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Property Detail</h1>
      <PropertyDetail property={property} />
    </div>
  );
};

PropertyDetailPage.getInitialProps = async ({ query }) => {
  const { id } = query;

  try {
    const property = await getPropertyById(id);
    return { property };
  } catch (error) {
    console.error('Error fetching property by ID:', error.message);
    return { property: {} };
  }
};

export default PropertyDetailPage;
