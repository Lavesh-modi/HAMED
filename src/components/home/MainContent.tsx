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

  // Array of profile data
  const profiles = [
    {
      name: 'John Doe',
      levelAndJob: 'Senior Developer',
      rating: 4.5,
      reviewsCount: '1K+ reviews',
      experienceYears: 10,
      imageUrl: '/agent.png',
      tags: ['JavaScript', 'React', 'Node.js'],
      price: '49.99',
      originalPrice: '80.00',
      offerText: 'Offer (1 month money back)'
    },
    {
      name: 'Jane Smith',
      levelAndJob: 'Frontend Developer',
      rating: 4.0,
      reviewsCount: '500+ reviews',
      experienceYears: 5,
      imageUrl: '/agent.png',
      tags: ['HTML', 'CSS', 'Vue.js'],
      price: '39.99',
      originalPrice: '70.00',
      offerText: 'Offer (Free trial available)'
    },
    {
      name: 'Jane Ismita',
      levelAndJob: 'Frontend Developer',
      rating: 4.0,
      reviewsCount: '500+ reviews',
      experienceYears: 5,
      imageUrl: '/agent.png',
      tags: ['HTML', 'CSS', 'Vue.js'],
      price: '39.99',
      originalPrice: '70.00',
      offerText: 'Offer (Free trial available)'
    },
    {
      name: 'Jane ',
      levelAndJob: 'Frontend Developer',
      rating: 4.0,
      reviewsCount: '500+ reviews',
      experienceYears: 5,
      imageUrl: '/agent.png',
      tags: ['HTML', 'CSS', 'Vue.js'],
      price: '39.99',
      originalPrice: '70.00',
      offerText: 'Offer (Free trial available)'
    },
    {
      name: 'Jane Ismita',
      levelAndJob: 'Frontend Developer',
      rating: 4.0,
      reviewsCount: '500+ reviews',
      experienceYears: 5,
      imageUrl: '/agent.png',
      tags: ['HTML', 'CSS', 'Vue.js'],
      price: '39.99',
      originalPrice: '70.00',
      offerText: 'Offer (Free trial available)'
    },
    {
      name: 'Jane ',
      levelAndJob: 'Frontend Developer',
      rating: 4.0,
      reviewsCount: '500+ reviews',
      experienceYears: 5,
      imageUrl: '/agent.png',
      tags: ['HTML', 'CSS', 'Vue.js'],
      price: '39.99',
      originalPrice: '70.00',
      offerText: 'Offer (Free trial available)'
    },
    {
      name: 'Jane ',
      levelAndJob: 'Frontend Developer',
      rating: 4.0,
      reviewsCount: '500+ reviews',
      experienceYears: 5,
      imageUrl: '/agent.png',
      tags: ['HTML', 'CSS', 'Vue.js'],
      price: '39.99',
      originalPrice: '70.00',
      offerText: 'Offer (Free trial available)'
    }
    // Add more profiles as needed
  ];

  return (
    <Grid container spacing={1}>
      {profiles.map((profile, index) => (
        <Grid item xs={12} sm={12} md={6} xl={4} key={index} display="flex" justifyContent="center">
          <ProfileCard
            name={profile.name}
            levelAndJob={profile.levelAndJob}
            rating={profile.rating}
            reviewsCount={profile.reviewsCount}
            experienceYears={profile.experienceYears}
            imageUrl={profile.imageUrl}
            tags={profile.tags}
            price={profile.price}
            originalPrice={profile.originalPrice}
            offerText={profile.offerText}
            onAddClick={handleAddClick}
            onFavoriteClick={handleFavoriteClick}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default MainContent;
