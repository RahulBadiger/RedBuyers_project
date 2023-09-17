// import React from 'react'
// import './Menu.css'

// const Menu = () => {
//   return (
    
//      <div id='menu'>
//       <h1 id='h1tag'>Login</h1>
//       <div id='buttontag'>
//         <h1 id='h1tag'>Register</h1>
//       </div>
//      </div>
  
//   )
// }

// export default Menu

import React, { useState, useEffect } from 'react';
import './Menu.css';
import { login } from '../../services/authService';

const Menu = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const data = await login('testLogin', 't3stP@ssw0rd');
      if (data.auth === '60o45uk4tw538uaq9vvnx7nm5iuif4j2') {
        sessionStorage.setItem('token', data.auth);
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <div id='menu'>
      {loggedIn ? (
        <>
          <h1 id='h1tag' onClick={handleLogout}>Logout</h1>
          <div id='buttontag'>
            <h1 id='h1tag'>Welcome, User</h1>
          </div>
        </>
      ) : (
        <>
          <h1 id='h1tag' onClick={handleLogin}>Login</h1>
          <div id='buttontag'>
            <h1 id='h1tag'>Register</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
