import React, { useState } from "react";
import UsersTable from './UsersTable';
import MoviesTable from './MoviesTable';
import MoviesChart from './MoviesChart';
import MovieLikesTable from './MovieLikesTable';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // ตัวอย่างการกำหนดข้อมูลจากตัวแปรหรือแหล่งข้อมูลอื่น ๆ
  const movies = [
    // ข้อมูล movie ตัวแรก
    {
      ID: 1,
      url: "",
      image: "Image 1",
      title: "Movie 1",
      genre: "Action",
      view: 1000,
    },
    // ข้อมูล movie ตัวที่สอง
    {
      ID: 2,
      url: "https://example.com/image2.jpg",
      image: "Image 2",
      title: "Movie 2",
      genre: "Comedy",
      view: 500,
    },
    // ข้อมูล movie ตัวอื่น ๆ ที่คุณต้องการ
    // ...
  ];

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          Users
        </li>
        <li
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          Movies
        </li>
        <li
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          MovieLikes
        </li>
        <li
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          MoviesTop
        </li>
      </ul>
      {/* Tab content */}
      <div className="content">
        {activeTab === 1 && <UsersTable movies={movies} />}
        {activeTab === 2 && <MoviesTable movies={movies} />}
        {activeTab === 3 && <MovieLikesTable movies={movies} />}
        {activeTab === 4 && <MoviesChart movies={movies} />}
        
      </div>
    </div>
  );
};

export default Tabs;
