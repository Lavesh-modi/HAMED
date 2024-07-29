// components/ProfileCard.js

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Stack, IconButton, Rating, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProfileCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Level and Job Title
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
          <Typography variant="body2" color="text.secondary" ml={0.5}>
            (1K+ reviews)
          </Typography>
          <Typography variant="body2" color="text.secondary" ml={1}>
            (+10 Y)
          </Typography>
        </Box>
      </CardContent>
      <CardMedia component="img" height="140" image="/vercel.svg" alt="profile image" />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip label="Tag1" />
          <Chip label="Tag2" />
          <Chip label="Tag3" />
          <Chip label="Tag4" />
        </Stack>
        <Typography variant="h5" component="div">
          49.99$ / M
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
          80.00 $
        </Typography>
        <Typography variant="body2" color="text.secondary">
          offer (1 month money back)
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between">
          <IconButton aria-label="add to favorites">
            <AddIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
