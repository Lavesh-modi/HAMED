import { Grid } from '@mui/material';
import React from 'react';
import ProfileCard from '../common/ProfileCard';

function MainContent() {
  const handleAddClick = () => {
    console.log('Add button clicked');
  };

  const handleFavoriteClick = () => {
    console.log('Favorite button clicked');
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4}>
        <ProfileCard
          name="John Doe"
          levelAndJob="Senior Developer"
          rating={4.5}
          reviewsCount="1K+ reviews"
          experienceYears={10}
          imageUrl="/noImage.png"
          tags={['JavaScript', 'React', 'Node.js']}
          price="49.99"
          originalPrice="80.00"
          offerText="Offer (1 month money back)"
          onAddClick={handleAddClick}
          onFavoriteClick={handleFavoriteClick}
        />
      </Grid>
    </Grid>
  );
}

export default MainContent;
