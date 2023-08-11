// src/App.js
import React, { useState } from 'react';
import './App.css';
import UsersComponent from './Components/HomeComponent/UsersComponent';
import  Login from './Components/LoginComponent/Login';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div className="SampleLogin">
      {!loggedInUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <UsersComponent username={loggedInUser} />
      )}
    </div>
  );
}

export default App;
