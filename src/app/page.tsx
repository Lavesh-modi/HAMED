// import ProfileCard from '@/components/common/ProfileCard';
import ReviewCard from '@/components/common/ReviewCard';
import BasicModal from '@/components/Modal/Modal';
// import { Container, Grid, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      {/* <Container sx={{ height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Container> */}

      <h1>Example Page</h1>
      <BasicModal>
        <ReviewCard />
      </BasicModal>
    </>
  );
}
