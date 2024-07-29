import ProfileCard from '@/components/common/ProfileCard';
import { Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <>
      <Container sx={{ height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
