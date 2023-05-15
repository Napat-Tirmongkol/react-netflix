import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function MoviesChart() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios.get('https://nutty-sandals-clam.cyclic.app/Moviestop')
      .then(res => {
        console.log(res.data);
        setMoviesData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Movies Chart</h2>
      <BarChart width={600} height={400} data={moviesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="likes_count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default MoviesChart;
