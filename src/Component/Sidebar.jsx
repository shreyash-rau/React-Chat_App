import React from 'react';

// importing other component of sidebar
import Navbar from "../Component/Navbar";
import Search from "../Component/Search";
import Chats from "../Component/Chats";


// importing navbar scss
import "../Styles/Navbar.scss";
import "../Styles/Search.scss";
import "../Styles/Chats.scss";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
       <Search/>
       <Chats/>

    </div>
  )
}

export default Sidebar;