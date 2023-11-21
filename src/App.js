
import {useSelector, useDispatch} from 'react-redux'

import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
const dispatch=useDispatch()
  useEffect(() => {
auth.onAuthStateChanged(userAuth => {
  //loged out
  if(userAuth){
dispatch(login({
email:userAuth.email,
  uid:userAuth.uid,
  displayName:userAuth.displayName,
  photoUrl: userAuth.photoURL,
}))
  }
  //loged out
  else{
dispatch(logout())
  }
})
  },[])
  return (
    <div className="app">
<Header />
{!user ? (<Login /> ) : <div className='app__body'>
  <Sidebar />
<Feed />


  {/* Feed */}

  {/* Widgets */}
</div> }

  {/* App Body */}

 
    </div>
  );
}

export default App;
