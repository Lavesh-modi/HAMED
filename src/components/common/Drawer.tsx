// components/DrawerHome.tsx

import React, { useState, ReactNode } from 'react';
import { Drawer, IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface DrawerHomeProps {
  children: ReactNode; // Define the children prop
}

const DrawerHome: React.FC<DrawerHomeProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div
      style={{
        display: isMobile ? 'block' : 'none'
      }}
    >
      <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        variant={isMobile ? 'temporary' : 'persistent'}
        sx={{
          width: isMobile ? '100%' : '0px'
        }}
      >
        <Box sx={{ width: isMobile ? '100%' : 350, padding: 2 }}>
          {children} {/* Render the children here */}
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerHome;
