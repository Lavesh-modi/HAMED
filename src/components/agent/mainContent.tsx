import { Box, Divider, IconButton, Typography } from '@mui/material';
import React from 'react';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CustomizedAccordions from '@/components/common/CustomizedAccordions';
import Reviews from './reviews';

const MainAgent: React.FC = () => {
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
      content: <Reviews date={date} />
    }
  ];

  const onFavoriteClick = () => {
    console.log('Favorite button clicked');
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" padding="7px">
        <Typography variant="h6" component="div" display="flex" alignItems="center" height="100%">
          Level and Job Title
        </Typography>
        <Box>
          <IconButton aria-label="chat" onClick={onFavoriteClick}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="add" onClick={onFavoriteClick}>
            <PersonAddOutlinedIcon />
          </IconButton>
          <IconButton aria-label="favorite" onClick={onFavoriteClick}>
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
};

export default MainAgent;
