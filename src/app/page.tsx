// import ProfileCard from '@/components/common/ProfileCard';
'use client';
import ProfileCard from '@/components/common/ProfileCard';
import ReviewCard from '@/components/common/ReviewCard';
import BasicModal from '@/components/Modal/Modal';
import { Container, Grid } from '@mui/material';

export default function Home() {
  const handleAddClick = () => {
    console.log('Add button clicked');
  };

  const handleFavoriteClick = () => {
    console.log('Favorite button clicked');
  };
  return (
    <>
      <Container sx={{ height: '100%' }}>
        <Grid container spacing={2}>
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
      </Container>

      <h1>Example Page</h1>
      <BasicModal>
        <ReviewCard />
      </BasicModal>
    </>
  );
}
