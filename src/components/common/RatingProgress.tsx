import { Box, LinearProgress, Rating, Typography } from '@mui/material';
import React from 'react';

interface RatingProgressProps {
  ratingValue: number;
  progressValue: number;
}

const RatingProgress: React.FC<RatingProgressProps> = ({ ratingValue, progressValue }) => {
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box display="flex" alignItems="center" width="130px">
        <Rating name="rating" value={ratingValue} readOnly />
      </Box>
      <Box display="flex" alignItems="center" height="15px" flex={1}>
        <LinearProgress variant="determinate" value={progressValue} sx={{ flexGrow: 1, marginRight: 2, height: 15 }} />
        <Typography>{`${progressValue}%`}</Typography>
      </Box>
    </Box>
  );
};

export default RatingProgress;
