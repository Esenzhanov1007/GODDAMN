import React from 'react';
import ProductList from '../components/Product/ProductList';
import { Box, Grid } from '@mui/material';

const ProductsPage = () => {
  return (
    <Box p={5}>
      <Grid container spacing={3}>
        <ProductList />
      </Grid>
    </Box>
  );
};

export default ProductsPage;