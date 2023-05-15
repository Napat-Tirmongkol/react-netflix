import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieLikes() {
  const [MovieLikes, setMovieLikes] = useState([]);

  useEffect(() => {
    axios.get('https://nutty-sandals-clam.cyclic.app/MovieLikes')
      .then(res => {
        console.log(res.data);
        setMovieLikes(res.data);
      });
  }, []);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>id</th>
          <th>user_id</th>
          <th>movie_id</th>
        </tr>
      </thead>
      <tbody>
        {MovieLikes.map((item, index) => (
          <tr key={index}>
            <td>{item.like_id}</td>
            <td>{item.user_id}</td>
            <td>{item.movie_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieLikes;
