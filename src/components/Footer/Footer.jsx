import { Box, Container, Grid, Link } from '@mui/material';
import React from 'react';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'





const Footer = () => {
  return (
    <Box 
    px={{xs: 3, sm:10}}
    py={{xs: 5, sm:10}}
    bgcolor='#f9f9f9' color='black'>
      <Container maxWidth='lg'>
        <Grid container spacing={5} textAlign='center'>
          <Grid   item xs={12} sm={6} md={2} sx={{mt:"0.6rem"}}>
            <Box sx={{fontWeight:'medium',fontSize:"1.1rem",cursor:'pointer'}}>Help</Box>
            <Box my={{xs:1, sm:2}} >
              <Link href='/'  color='inherit' underline="hover" sx={{fontSize:"0.9rem"}} >
                Contact
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/'  color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
                Support
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/'  color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
                Privacy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{mt:"0.6rem"}}>
            <Box sx={{fontWeight:'medium',fontSize:"1.1rem",cursor:'pointer'}}>Account</Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
                Login
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
                Register
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{mt:"0.6rem"}}>
            <Box sx={{fontWeight:'medium',fontSize:"1.1rem",cursor:'pointer'}}>Messages</Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
                Backup
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
                History
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
                Roll
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{mt:"0.6rem"}}>
            <Box sx={{fontWeight:'medium',fontSize:"1.1rem",cursor:'pointer'}}>Goddamn Card & Rewards</Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}} >
              The Goddamn Club Rewards
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
              Pay My Bill
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
              Manage My Goddamn Card
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{mt:"0.6rem"}}>
            <Box sx={{fontWeight:'medium',fontSize:"1.1rem",cursor:'pointer'}}>Goddamn, Inc.</Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}} >
                Goddamn Osh
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
                Goddamn Bishkek
              </Link>
            </Box>
            <Box my={{xs:1, sm:2}}>
              <Link href='/' color='inherit' underline="hover" sx={{fontSize:"0.9rem"}}>
              Goddamn Media Network
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{}}>
              <Box sx={{fontWeight:'medium',fontSize:"1.1rem",cursor:'pointer'}}><AppShortcutIcon /> Get our apps</Box>
              <Box sx={{flexDirection: 'row'}}> 
                <Box my={{xs:1, sm:2}}>
                  <Link href='/' color='inherit' underline="none" sx={{fontSize:"0.9rem"}}>
                    <InstagramIcon className="icon insta" /> 
                    <PinterestIcon className="icon pinterest"/> 
                    <TwitterIcon className="icon twitter"/> 
                    <FacebookIcon className="icon facebook"/>
                  </Link>
                </Box>
              </Box>
          </Grid>
        </Grid>
          <Box textAlign='center' pt={{xs:5, sm:10}} pb={{xs:5, sm:0}}>
          &copy; {new Date().getFullYear()} Goddamn, Inc.
          </Box>
      </Container>
    </Box>
  );
};

export default Footer;