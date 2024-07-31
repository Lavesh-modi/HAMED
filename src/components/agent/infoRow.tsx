import { Box, Typography } from '@mui/material';
import React from 'react';

interface InfoRowProps {
  title: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ title }) => (
  <Box display="flex" alignItems="center" width="100%">
    <Typography variant="h6" color="black" textAlign="center">
      {title}
    </Typography>
  </Box>
);

export default InfoRow;
