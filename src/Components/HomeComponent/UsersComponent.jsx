
import React from 'react';
import usersData from '../../Assets/JSON/Users.json';
const UsersComponent = ({ username }) => {
  return (
    <div className='alignC'>
      <h2>Welcome, {username}!</h2>
      <hr />
      <h2>Usernames List:</h2>
      <ul>
        {usersData.map((data) => (
          <li key={data.id} value={data.id}>{data.name}</li>
        )
        )}
      </ul>
    </div>
  );
};

export default UsersComponent;
