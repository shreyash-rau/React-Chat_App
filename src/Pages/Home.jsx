import React from 'react';

import Sidebar from '../Component/Sidebar';
import Mainchat from "../Component/Mainchat";

// importing scss files
import "../Styles/MainChat.scss";

const Home = () => {
  return (
    <div className="home">

      <div className="container1">

        <Sidebar/>
        <Mainchat/>

      </div>

    </div>
  )
}

export default Home