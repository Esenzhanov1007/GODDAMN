import { Grid, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useProducts } from '../../contexts/ProductContextProvider';

const SideBar = () => {
  const { fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3}>
      <Paper elevation={5} sx={{ p: 2 }}>
        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams('type', e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />

              <FormControlLabel
                value="vapes"
                control={<Radio />}
                label="vapes"
              />

              <FormControlLabel
                value="pods"
                control={<Radio />}
                label="pods"
              />

              <FormControlLabel
                value="vape liquid"
                control={<Radio />}
                label="vape liquid"
              />
              <FormControlLabel
                value="hookah"
                control={<Radio />}
                label="hookah"
              />
              <FormControlLabel
                value="hookah tobacco"
                control={<Radio />}
                label="hookah tobacco"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams('price_lte', e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="all" />
            <FormControlLabel
              value="500"
              control={<Radio />}
              label="less than 500$"
            />

            <FormControlLabel
              value="1000"
              control={<Radio />}
              label="less than 1000$"
            />

            <FormControlLabel
              value="2000"
              control={<Radio />}
              label="less than 2000$"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;