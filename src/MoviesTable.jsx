import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MoviesTable() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://nutty-sandals-clam.cyclic.app/Movies')
      .then(res => {
        console.log(res.data);
        setMovies(res.data);
      });
  }, []);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>release_date</th>
        </tr>
      </thead>
      <tbody>
        {Movies.map((item, index) => (
          <tr key={index}>
            <td>{item.movie_id}</td>
            <td>{item.title}</td>
            <td>{item.release_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MoviesTable;
