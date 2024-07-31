import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
