import { Box, Button, Checkbox, FormControlLabel, Rating } from '@mui/material';
import React from 'react';
import ComboBox from '../common/AutoComplete';
import RangeSlider from '../common/RangeSlider';
function SideBar() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" padding="20px">
      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" gap="20px">
        <ComboBox />
        <ComboBox />
        <Rating name="read-only" value={4} readOnly />
        <Rating name="read-only" value={3} readOnly />
        <RangeSlider />
        <Box display="flex" justifyContent="center" flexDirection="column">
          <FormControlLabel control={<Checkbox defaultChecked />} label="Legend Level" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Senior Level " />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Mid Level" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Junior Level" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
