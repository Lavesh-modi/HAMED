// components/ReviewCard.js

import React from 'react';
import { Card, CardMedia, Typography, Box, TextField, Button, Rating, Divider } from '@mui/material';
const ReviewCard = () => {
  return (
    <Card sx={{ maxWidth: 600, p: 2 }}>
      <Box display="flex" alignItems="center">
        <CardMedia component="img" sx={{ width: 64, height: 64 }} image="/noImage.png" alt="profile image" />
        <Box ml={2} flexGrow={1}>
          <Typography variant="h6">Name</Typography>
          <Typography variant="body2" color="text.secondary">
            Level and Job Title
          </Typography>
          <Box display="flex" alignItems="center">
            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
            <Typography variant="body2" color="text.secondary" ml={0.5}>
              (1K+ reviews)
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Overall Review</Typography>
      <Rating name="review-rating" defaultValue={3} precision={1} />
      <Typography variant="body1" sx={{ mt: 2 }}>
        Comment
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        defaultValue="Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix"
        sx={{ mt: 1 }}
      />
    </Card>
  );
};

export default ReviewCard;
