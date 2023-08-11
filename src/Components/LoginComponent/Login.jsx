
import React, { useState } from 'react';
import usersData from '../../Assets/JSON/auth.json';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState('');
  const [passworderror,setpasswordError] = useState("");
  const [usernameerror,setuserNameError] = useState("");

  const handleLogin = () => {
      if (username===null || username === undefined || username ==="") {
      setuserNameError("UserID is required!!!");
      return false;
      } else {
        if (password===null || password === undefined || password ==="")  {
      setpasswordError(
        "Password is required!!!"
      );
      return false;
    }  else {
          setpasswordError("");
          setuserNameError("");
          const user = usersData.find(data => data.userID === username && data.password === password);
    if (user) {
      onLogin(user.userID);
    } else {
    setInvalid("Invalid Credentials please retry")
    }
    }
      
    }

  };
 

  return (
    
    <div className='loginC'>
      <h2>Login</h2>
      <div>
        <input
        type="text"
        placeholder="Username"
        value={username}
        required
        onChange={e => {setpasswordError("");
          setuserNameError(""); setUsername(e.target.value) }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      </div>
      
      <p>{passworderror}</p>
      <p>{usernameerror}</p>
      <p>{invalid}</p>
      <button onClick={handleLogin}>Login</button>
      </div>
    
  );
};

export default Login;
