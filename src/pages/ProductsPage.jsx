import React from 'react';
import ProductList from '../components/Product/ProductList';
import { Box, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar/Sidebar'

const ProductsPage = () => {
  return (
    <Box p={5}>
      <Grid container spacing={3}>
        <Sidebar />
        <ProductList />
      </Grid>
    </Box>
  );
};

export default ProductsPage;