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
        border: '1px solid #454545',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      <CategoryAutocomplete
        sx={{ marginInline: '0px', backgroundColor: 'white' }}
        options={categories}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            variant="outlined"
            placeholder="Category"
            sx={{
              '& .MuiOutlinedInput-root': {
                paddingRight: 0,
                '& fieldset': {
                  border: 'none'
                }
              }
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
