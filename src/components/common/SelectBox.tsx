import React, { FC } from 'react';
import { Autocomplete, TextField, AutocompleteRenderGroupParams } from '@mui/material';
import { Typography } from '@mui/material';

interface OptionType {
  title: string;
  subheader?: string;
}

const options: OptionType[] = [
  { title: 'Category', subheader: 'SubCategory' },
  { title: 'sub1', subheader: 'cat1' },
  { title: 'sub2', subheader: 'cat1' },
  { title: 'sub1', subheader: 'cat2' },
  { title: 'sub2', subheader: 'cat2' }
];

const CategoryAutocomplete: FC = () => (
  <Autocomplete
    options={options}
    groupBy={(option) => option.subheader || 'Other'}
    getOptionLabel={(option) => option.title}
    renderInput={(params) => <TextField {...params} placeholder="Search…" variant="outlined" fullWidth />}
    renderGroup={(params: AutocompleteRenderGroupParams) => (
      <div key={params.key}>
        <Typography variant="h6">{params.group}</Typography>
        {params.children}
      </div>
    )}
  />
);

export default CategoryAutocomplete;
