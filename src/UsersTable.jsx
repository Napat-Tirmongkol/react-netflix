import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersTable() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://nutty-sandals-clam.cyclic.app/Users')
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      });
  }, []);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {Users.map((item, index) => (
          <tr key={index}>
            <td>{item.user_id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
