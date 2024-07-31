import { Box } from '@mui/material';
import React from 'react';
import RatingProgress from '../common/RatingProgress';
import InfoRow from './infoRow';
import ReviewList from './reviewList';

interface ReviewsProps {
  date: Date;
}
const ratingsData = [
  { ratingValue: 4, progressValue: 70 },
  { ratingValue: 3, progressValue: 50 },
  { ratingValue: 5, progressValue: 90 },
  { ratingValue: 2, progressValue: 30 },
  { ratingValue: 1, progressValue: 10 }
];
const Reviews: React.FC<ReviewsProps> = ({ date }) => (
  <Box>
    <Box display="flex" width="100%" height="200px" border={1} borderColor="divider">
      <Box flex={1} display="flex" alignItems="center" flexDirection="column" justifyContent="center" padding="10px">
        {ratingsData.map((data, index) => (
          <RatingProgress key={index} ratingValue={data.ratingValue} progressValue={data.progressValue} />
        ))}
      </Box>
      <Box flex={1} display="flex" alignItems="center" paddingY="30px">
        <Box display="flex" flexDirection="column" sx={{ borderLeft: '2px solid black' }} paddingLeft="10px">
          <InfoRow title="3,526 rating" />
          <InfoRow title="started from 2023-12-05" />
          <InfoRow title="134 Month of work" />
          <InfoRow title="83.2% renew" />
        </Box>
      </Box>
    </Box>
    <ReviewList date={date} />
  </Box>
);

export default Reviews;
