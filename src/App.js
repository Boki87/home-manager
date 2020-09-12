import React from 'react';
import {useAuth} from './contexts'

import Auth from './components/auth/Auth'
import ProtectedRoutes from './components/ProtectedRoutes'

import Notifications from './components/notifications/Notifications'


function App() {

  const {user} = useAuth()

  return (
    <>
      
      {!user ? <Auth/> : <ProtectedRoutes/>}

      <Notifications />
    </>
  );
}

export default App;
