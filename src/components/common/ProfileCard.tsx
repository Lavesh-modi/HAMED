'use client';
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Stack, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Star } from '@mui/icons-material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
interface ProfileCardProps {
  name: string;
  levelAndJob: string;
  rating: number;
  reviewsCount: string;
  experienceYears: number;
  imageUrl: string;
  tags: string[];
  price: string;
  originalPrice: string;
  offerText: string;
  onAddClick: () => void;
  onFavoriteClick: () => void;
}

// eslint-disable-next-line react/display-name
const ProfileCard: React.FC<ProfileCardProps> = React.memo(
  ({
    name,
    levelAndJob,
    rating,
    reviewsCount,
    experienceYears,
    imageUrl,
    tags,
    price,
    originalPrice,
    offerText,
    onAddClick,
    onFavoriteClick
  }) => {
    return (
      <Card sx={{ width: 348, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mb: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="div" display="flex " alignItems="center" height="100%">
              {name}
            </Typography>
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center">
                <Typography variant="h6" component="span">
                  {rating}
                </Typography>
                <Star fontSize="inherit" style={{ color: '#FFD700', marginLeft: 2 }} />
              </Box>
              <Typography variant="body2" color="text.secondary" ml={0.5}>
                ({reviewsCount})
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              {levelAndJob}
            </Typography>
            <Typography variant="body2" color="text.secondary" ml={1}>
              (+{experienceYears} Y)
            </Typography>
          </Box>
        </CardContent>

        <Box sx={{ position: 'relative' }}>
          <CardMedia component="img" height="200" image={imageUrl ? imageUrl : '/agent.png'} alt="profile" sx={{ objectFit: 'cover' }} />
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mb: 1,
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              // backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '8px',
              boxSizing: 'border-box',
              zIndex: 5
            }}
          >
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} sx={{ background: 'black', color: 'white' }} />
            ))}
          </Stack>
        </Box>

        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h5" component="div">
                {price}$/M
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                {originalPrice}$
              </Typography>
            </Box>
            <Box>
              <IconButton aria-label="add to cart" onClick={onAddClick}>
                <PersonAddIcon />
              </IconButton>
              <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {offerText}
          </Typography>
        </CardContent>
      </Card>
    );
  }
);

export default ProfileCard;
