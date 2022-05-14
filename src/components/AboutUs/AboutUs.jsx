import React from 'react';
import './AboutUs.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='aboutUsImg'>
        <img src="https://www.theartofvape.gr/wp-content/uploads/2022/03/artofvape.png" alt="vape" />
      </div>
      <div className='aboutUsInfo'>
        <h1>ABOUT US</h1>
        <div className='info'>
          <p >ELECTRONIC CIGARETTES, STEAM PRODUCERS, REPLACEMENT LIQUIDS:</p>
          <strong>Electronic cigarette in Bishkek: The Goddamn</strong>
        </div>
        <div className='aboutUsIcons'>
          <span className='spanIcon'><HomeIcon className='icon'/> Erkindic av. 123</span>
          <span className='spanIcon'><PhoneIphoneIcon className='icon'/>+996999992299</span>
        </div>
        <div className='info2'>
          <p >In the store with electronic cigarettes you will find electronic cigarettes, refill liquids, mods, vaporizers, accessories, batteries for MOD, BOX MOD, chargers, cases etc.</p>
          <p><strong>The Goddamn</strong> e-cigarette store is located in Pefki, Lykovrisi and has direct access from Metamorfosi, Lykovrisi and the surrounding areas</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;