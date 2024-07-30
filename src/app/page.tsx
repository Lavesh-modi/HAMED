// import ProfileCard from '@/components/common/ProfileCard';
'use client';
import ComboBox from '@/components/common/AutoComplete';
import ProfileCard from '@/components/common/ProfileCard';
// import RangeSlider from '@/components/common/RangeSlider';
import { Box, useTheme, Container, Grid, Button, Rating, Checkbox, FormControlLabel } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAddClick = () => {
    console.log('Add button clicked');
  };

  const handleFavoriteClick = () => {
    console.log('Favorite button clicked');
  };
  return (
    <Box display="flex">
      <Box
        height="100%"
        width="350px"
        paddingRight="20px"
        sx={{
          display: isSmallScreen ? 'none' : 'block',
          border: '1px solid #ccc'
        }}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" padding="20px">
          <Box display="flex" justifyContent="space-between">
            <Button variant="text">Text</Button>
            <Button variant="text">Text</Button>
            <Button variant="text">Text</Button>
            <Button variant="text">Text</Button>
            <Button variant="text">Text</Button>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" gap="20px">
            <ComboBox />
            <ComboBox />
            <Rating name="read-only" value={4} readOnly />
            <Rating name="read-only" value={3} readOnly />
            {/* <RangeSlider /> */}
            <Box display="flex" justifyContent="center" flexDirection="column">
              <FormControlLabel control={<Checkbox defaultChecked />} label="Legend Level" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Senior Level " />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Mid Level" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Junior Level" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Container sx={{ flex: 1, paddingTop: '40px' }}>
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
            {/* <ProfileCard
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
            /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
