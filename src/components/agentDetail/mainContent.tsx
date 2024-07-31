import { Box, Divider, IconButton, Rating, Typography } from '@mui/material';
import React from 'react';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CustomizedAccordions from '@/components/common/CustomizedAccordions';
import RatingProgress from '../common/RatingProgress';

function MainAgent() {
  const date = new Date();
  const accord1 = [
    {
      title: 'Info',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, esse aliquid? Animi quas dolorem dolorum! Laborum beatae cumque excepturi minima quisquam, at blanditiis aliquid repudiandae incidunt inventore sit. Eaque, illo nihil numquam ipsa dicta labore sunt inventore odit suscipit deleniti sint, praesentium quod veniam debitis atque harum modi molestiae doloribus!'
    }
  ];

  const accord2 = [
    {
      title: 'Reviews',
      content: (
        <Box>
          <Box display="flex" width="100%" height="200px" border={1} borderColor="divider">
            <Box flex={1} display="flex" alignItems="center" flexDirection="column" justifyContent="center" padding="10px">
              <RatingProgress />
              <RatingProgress />
              <RatingProgress />
              <RatingProgress />
              <RatingProgress />
            </Box>
            <Box flex={1} display="flex" alignItems="center" paddingY="30px">
              <Box display="flex" flexDirection="column" sx={{ borderLeft: '2px solid black' }} paddingLeft="10px">
                <Box display="flex" alignItems="center" width="100%">
                  <Typography variant="h6" color="black" textAlign="center">
                    3,526 rating
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%">
                  <Typography variant="h6" color="black" textAlign="center">
                    started from 2023-12-05
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%">
                  <Typography variant="h6" color="black" textAlign="center">
                    134 Month of work
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%">
                  <Typography variant="h6" color="black" textAlign="center">
                    83.2% renew
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" gap={2} flexDirection="column">
            <Box border=" 2px solid black " height="100px" padding={1}>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" justifyContent="space-between" gap="5px">
                  <Typography variant="h6" color="black" textAlign="center">
                    Name
                  </Typography>
                  <Typography variant="h6" color="black" textAlign="center">
                    {date.getDate()}
                  </Typography>
                </Box>
                <Rating name="read-only" value={3} readOnly />
              </Box>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga ratione assumenda doloremque aperiam? Adipisci
              nesciunt obcaecati quos, voluptatum facere fugit ducimus quis molestias consectetur magnam vitae velit cumque dignissimos?
            </Box>
            <Box border=" 2px solid black " height="100px" padding={1}>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" justifyContent="space-between" gap="5px">
                  <Typography variant="h6" color="black" textAlign="center">
                    Name
                  </Typography>
                  <Typography variant="h6" color="black" textAlign="center">
                    {date.getDate()}
                  </Typography>
                </Box>
                <Rating name="read-only" value={3} readOnly />
              </Box>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga ratione assumenda doloremque aperiam? Adipisci
              nesciunt obcaecati quos, voluptatum facere fugit ducimus quis molestias consectetur magnam vitae velit cumque dignissimos?
            </Box>
          </Box>
        </Box>
      )
    }
  ];
  const onFavoriteClick = () => {
    console.log('Favorite button clicked');
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" padding="7px">
        <Box>
          <Typography variant="h6" component="div" display="flex" alignItems="center" height="100%">
            Level and Job Title
          </Typography>
        </Box>
        <Box>
          <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
            <PersonAddOutlinedIcon />
          </IconButton>
          <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box padding="10px">
        <CustomizedAccordions items={accord1} />
        <CustomizedAccordions items={accord2} />
      </Box>
    </Box>
  );
}

export default MainAgent;
