import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Optional for styling

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Save data into state
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
