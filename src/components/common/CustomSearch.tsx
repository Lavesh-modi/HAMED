import React from 'react';
import { Box, TextField, InputAdornment, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

interface Category {
  title: string;
}

const categories: Category[] = [
  { title: 'Cat 1' },
  { title: 'SubCat1' },
  { title: 'SubCat2' },
  { title: 'Cat 1' },
  { title: 'SubCat1' },
  { title: 'SubCat2' }
];

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  padding: theme.spacing(0, 2),
  width: '100%',
  height: '100%'
}));

const CategoryAutocomplete = styled(Autocomplete<Category>)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    paddingRight: 0,
    '& fieldset': {
      border: 'none'
    }
  },
  '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
    paddingRight: theme.spacing(4)
  }
}));

const CustomSearchBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'minmax(100px, 30%) 70%',
        width: '60%',
        height: '100%',
        border: '1px solid #1976d2',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      <CategoryAutocomplete
        sx={{ marginInline: '0px', border: '1px solid #1976d2' }}
        options={categories}
        renderOption={(props, option) => (
          <li
            {...props}
            style={{
              color: '#1976d2', // Change option text color
              fontWeight: 'bold' // Make option text bold
            }}
          >
            {option.title}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            variant="outlined"
            placeholder="Category"
            sx={{
              '& .MuiOutlinedInput-input': {
                color: '#000',
                fontWeight: '700' // Change text color
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#000',
                fontWeight: '700' // Change placeholder color
              },
              '& .MuiOutlinedInput-root': {
                paddingRight: 0,
                '& fieldset': {
                  border: 'none'
                }
              }
            }}
            InputProps={{
              ...params.InputProps,
              sx: {
                color: '#1976d2' // Change text color
              }
            }}
            InputLabelProps={{
              style: { color: '#1976d2' } // Change label color if needed
            }}
          />
        )}
      />
      <Search style={{ marginInline: '0px', padding: '0px', width: '100%' }}>
        <Box sx={{ width: '100%' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search…"
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              }
            }}
          />
        </Box>
      </Search>
    </Box>
  );
};

export default CustomSearchBar;
