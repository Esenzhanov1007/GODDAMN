import { Button, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN } from '../../helpers/consts';
import './Navigation.css'
import { useAuth } from '../../contexts/AuthContextProvider';

const pages = [
  { name: 'ABOUT US', link: '/about', id: 1 },
  { name: 'CONTACT US', link: '/contacts', id: 2 },
  { name: 'PRODUCTS', link: '/products', id: 3 },
];


const Navigation = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const {user: {email}} = useAuth();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Box className="navig" sx={{display: 'flex', justifyContent: 'space-around'}}>
        {pages.map((page) => (
          <MenuItem className="navigLink" key={page.id} onClick={handleCloseNavMenu} sx={{bgcolor: 'none'}}>
            <Link to={page.link}  >
              <Typography
                
                
                sx={{
                  ml: 'auto',
                  my: 1,
                  color: 'black',
                  display: 'block',
                   background: 'white',
                }}
                
              >
                {page.name}
              </Typography>
            </Link>
          </MenuItem>
        ))}
        {email == ADMIN ? (
          <MenuItem className="navigLink" onClick={handleCloseNavMenu} sx={{bgcolor: 'none'}}> 
            <Link to="/admin">
              <Button sx={{ my: 2, color: 'black' }}>ADMIN PAGE</Button>
            </Link>
          </MenuItem>
        ) : ''}
      </Box>
    </div>
  );
};

export default Navigation;