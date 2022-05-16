import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import './Contacts.css'


const Contacts = () => {
  return (
    <div >
      <div style={{display:'flex',justifyContent:'center', margin: '5rem'}}>
        <div style={{paddingRight:'5rem',}}>
          <div>
            <h2 style={{borderBottom:'2px solid #D4B79B'}}>Contact us</h2>
            <p className='home'><HomeIcon style={{marginRight:'8px', color:'#D4B79B'}}/> Erkindic av. 123</p>
            <p><LocalPhoneIcon style={{marginRight:'8px', color:'#D4B79B'}}/>+996999992299</p>
            <p className='email'><EmailIcon style={{marginRight:'8px', color:'#D4B79B'}}/>goddamncorp@gmail.com</p>
          </div>
          <div>
            <div>
              <h2 style={{borderBottom:'2px solid #D4B79B '}} >Opening hours</h2>
            </div>
            <div style={{display:'flex'}}>
              <div className="clock" ><AccessTimeIcon style={{color:'#D4B79B'}}/></div>
              <div style={{marginTop:'1rem'}}>
                <p>Mon - Fri: 09:00 - 21:00</p>
                <p>Saturday: 10:00 - 15:00</p>
                <p>Closed on Sunday</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inputs" style={{backgroundColor:'#f9f9f9', width:'25rem',marginLeft:'10em', padding:'1rem 2rem' }}>
          <span style={{marginTop:'1rem'}}>Name</span>
          <br />
          <input style={{ marginBottom:'1rem'}} type="text" size="40"  />
          <br />
          <span>Email</span>
          <br />
          <input style={{marginBottom:'1rem'}} type="text" size="40" />
          <br />
          <span>Subject</span>
          <br />
          <input style={{marginBottom:'1rem'}} type="text" size="40" />
          <br />
          <div style={{marginTop:'20px'}}>
            <span >
              Message
              <br />
              <textarea cols="40" rows="7"></textarea>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;