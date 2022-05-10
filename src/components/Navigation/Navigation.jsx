import { MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'ABOUT US', link: '/about', id: 1 },
  { name: 'CONTACT US', link: '/contacts', id: 2 },
  { name: 'PRODUCTS', link: '/products', id: 3 },
  { name: 'ADMIN', link: '/admin', id: 4 },
];


const Navigation = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        {pages.map((page) => (
          <MenuItem key={page.id} onClick={handleCloseNavMenu}>
            <Link to={page.link}>
              <Typography
                sx={{
                  ml: 'auto',
                  my: 1,
                  color: 'black',
                  display: 'block',
                }}
              >
                {page.name}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Box>
    </div>
  );
};

export default Navigation;