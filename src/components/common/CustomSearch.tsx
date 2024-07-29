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
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}));

const CategoryAutocomplete = styled(Autocomplete<Category>)(({ theme }) => ({
  //   width: 100,
  marginRight: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    paddingRight: 0
  },
  '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
    paddingRight: theme.spacing(4)
  }
}));

const CustomSearchBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        marginInline: 'auto',
        padding: '0px',
        gap: '0px',
        borderStyle: 'ridge',
        borderColor: '#454545',
        borderWidth: '1px'
      }}
    >
      <CategoryAutocomplete
        sx={{ marginInline: '0px' }}
        options={categories}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="" variant="outlined" placeholder="Category" />}
      />
      <Search style={{ marginInline: '0px', padding: '0px', width: '30rem' }}>
        <Box sx={{ flexGrow: 10, width: '100%' }}>
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
              )
            }}
          />
        </Box>
      </Search>
    </Box>
  );
};

export default CustomSearchBar;
