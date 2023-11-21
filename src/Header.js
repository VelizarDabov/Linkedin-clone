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
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logoutOfApp = () => {
dispatch(logout())
auth.signOut();
    }
  return (
    <div className='header'>
       <div className='header__left'>
<img src={logo} alt=''/>
<div className='header__search'>
<SearchIcon/>
    <input placeholder='Search' type='text'/>
        
    
</div>
       </div>
       <div className='header__right'>
<HeaderOption title='Home' Icon={HomeIcon}/>
<HeaderOption title='My network' Icon={SupervisorAccount}/>
<HeaderOption title='Job' Icon={BusinessCenterIcon}/>
<HeaderOption title='Messaging' Icon={ChatIcon}/>
<HeaderOption title='Notifications' Icon={NotificationsIcon}/>
<HeaderOption  avatar={true} onClick={logoutOfApp}  title='me'/>
</div>
    </div>
  )
}

export default Header