'use client';

import { Box, useTheme } from '@mui/material';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

interface DynamicSidebarProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
}

const DynamicSidebar: React.FC<DynamicSidebarProps> = ({ sidebar, main }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" height="100vh" overflow="hidden">
      <Box
        height="100%"
        width="350px"
        paddingRight="20px"
        // bgcolor="red"
        sx={{
          display: isSmallScreen ? 'none' : 'block',
          border: '1px solid #ccc',
          overflowY: 'scroll',

          overflow: 'auto', // Allows scrolling if necessary without showing scrollbars
          '&::-webkit-scrollbar': {
            display: 'none' // Hides scrollbar for WebKit browsers (Chrome, Safari)
          }
        }}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" padding="20px">
          {sidebar}
        </Box>
      </Box>
      <Box
        flex={1}
        padding="20px"
        height="100%"
        sx={{
          overflowY: 'scroll',
          overflow: 'auto', // Allows scrolling if necessary without showing scrollbars
          '&::-webkit-scrollbar': {
            display: 'none' // Hides scrollbar for WebKit browsers (Chrome, Safari)
          }
        }}
      >
        {main}
      </Box>
    </Box>
  );
};

export default DynamicSidebar;
