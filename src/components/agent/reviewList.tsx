import { Box, Rating, Typography } from '@mui/material';
import React from 'react';

interface ReviewListProps {
  date: Date;
}

const ReviewList: React.FC<ReviewListProps> = ({ date }) => {
  const reviews = [
    {
      name: 'Name',
      rating: 3,
      date: date.getDate(),
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga ratione assumenda doloremque aperiam? Adipisci nesciunt obcaecati quos, voluptatum facere fugit ducimus quis molestias consectetur magnam vitae velit cumque dignissimos?'
    },
    {
      name: 'Name',
      rating: 3,
      date: date.getDate(),
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga ratione assumenda doloremque aperiam? Adipisci nesciunt obcaecati quos, voluptatum facere fugit ducimus quis molestias consectetur magnam vitae velit cumque dignissimos?'
    }
  ];

  return (
    <Box display="flex" gap={2} flexDirection="column">
      {reviews.map((review, index) => (
        <Box key={index} border="2px solid black" height="100px" padding={1}>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" gap="5px">
              <Typography variant="h6" color="black">
                {review.name}
              </Typography>
              <Typography variant="h6" color="black">
                {review.date}
              </Typography>
            </Box>
            <Rating name="read-only" value={review.rating} readOnly />
          </Box>
          <Typography>{review.content}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewList;
