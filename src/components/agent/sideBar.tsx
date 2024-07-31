import { Box, CardContent, CardMedia, Chip, Divider, IconButton, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Star } from '@mui/icons-material';

// Define the props interface
interface SideBarAgentProps {
  name: string;
  image: string;
  tags: string[];
  category: string;
  subcategory: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number; // optional
  onFavoriteClick: () => void; // function type
}

const SideBarAgent: React.FC<SideBarAgentProps> = ({
  name,
  image,
  tags,
  category,
  subcategory,
  rating,
  reviews,
  price,
  oldPrice,
  onFavoriteClick
}) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" padding="10px">
      <Box display="flex" alignItems="center">
        <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
          <KeyboardBackspaceIcon />
        </IconButton>
        <Typography variant="h6" component="div" display="flex" alignItems="center" height="100%">
          {name}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ marginTop: '40px' }}>
        <CardMedia component="img" height="200" image={image} alt="profile" sx={{ objectFit: 'cover' }} />
      </Box>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mb: 1,
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '8px',
          boxSizing: 'border-box',
          zIndex: 5
        }}
      >
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} sx={{ background: 'black', color: 'white' }} />
        ))}
      </Stack>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h5" component="div">
              {category}
            </Typography>
            <Typography variant="h5" component="div">
              {subcategory}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" component="div" display="flex" alignItems="center" height="100%">
          <Rating name="read-only" value={rating} readOnly />
        </Typography>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <Typography variant="h6" component="span">
              {rating}
            </Typography>
            <Star fontSize="inherit" style={{ color: '#FFD700', marginLeft: 2 }} />
          </Box>
          <Typography variant="body2" color="text.secondary" ml={0.5}>
            ({reviews}+ reviews)
          </Typography>
        </Box>
      </Box>

      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h5" component="div">
              ${price}/M
            </Typography>
            {oldPrice && (
              <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                ${oldPrice}
              </Typography>
            )}
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {'1 month money back'}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default SideBarAgent;
