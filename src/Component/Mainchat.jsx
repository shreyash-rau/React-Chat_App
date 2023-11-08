import React, { useContext } from 'react';

// from firebase 
import { ChatContext } from '../context/ChatContext';

// importing images 
import Cam from "../image/cam.png";
import Add from "../image/add.png";
import More from "../image/more.png";

// importing other component of sidebar
import Input from "./Input";
import Messages from './Message';

// importing style - scss
import "../Styles/Message.scss";
import "../Styles/Input.scss";


const Mainchat = () => {
  
  const {data} = useContext(ChatContext);

  return (
    <div className='chat'>

      <div className="chatInfo">
        <span>{data.user?.displayName}</span>

        <div className="chaticon">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>

      </div>

      <Messages/>
      <Input/>

    </div>
  );
};

export default Mainchat;