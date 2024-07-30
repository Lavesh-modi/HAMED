import CustomizedAccordions from '@/components/common/CustomizedAccordions';
import RatingProgress from '@/components/common/RatingProgress';
import { Box, Typography } from '@mui/material';
import React from 'react';

function AgentDetail() {
  const accordionItems = [
    {
      title: 'Info',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, esse aliquid? Animi quas dolorem dolorum! Laborum beatae cumque excepturi minima quisquam, at blanditiis aliquid repudiandae incidunt inventore sit. Eaque, illo nihil numquam ipsa dicta labore sunt inventore odit suscipit deleniti sint, praesentium quod veniam debitis atque harum modi molestiae doloribus!'
    },
    {
      title: 'Reviews',
      content: (
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
      )
    },
    {
      title: 'Collapsible Group Item #3',
      content: 'Content for item #3 goes here.'
    }
  ];
  return (
    <>
      <CustomizedAccordions items={accordionItems} />
    </>
  );
}

export default AgentDetail;
