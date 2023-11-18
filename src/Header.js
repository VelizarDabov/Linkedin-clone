import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import logo from './assets/lnlogo.png';
import profileImg from './assets/profile.jpg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className='header'>
       <div className='header__left'>
<img src={logo} alt=''/>
<div className='header__search'>
<SearchIcon/>
    <input type='text'/>
        
    
</div>
       </div>
       <div className='header__right'>
<HeaderOption title='Home' Icon={HomeIcon}/>
<HeaderOption title='My network' Icon={SupervisorAccount}/>
<HeaderOption title='Job' Icon={BusinessCenterIcon}/>
<HeaderOption title='Messaging' Icon={ChatIcon}/>
<HeaderOption title='Notifications' Icon={NotificationsIcon}/>
<HeaderOption avatar={profileImg} title='me'/>
</div>
    </div>
  )
}

export default Header