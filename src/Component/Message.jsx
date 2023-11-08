// import { doc, onSnapshot } from "firebase/firestore";
// import React, { useContext, useEffect, useState } from "react";
// import { ChatContext } from "../context/ChatContext";
// import { db } from "../firebase";

// import Messages2 from './Messages2'

// import "../Styles/Message.scss";

// const Message = () => {

//   const[ msg, setMsg ] = useState([])
 
//   const {data} = useContext (ChatContext);

//   useEffect(() => {
//     const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
//       doc.exists() && setMsg(doc.data().msg);
//     });

//     return () => {
//       unSub();
//     };
//   }, [data.chatId]);

//   // console.log(msg)

//   return (
//     <div className="message">

//     {/* <Messages2/> */}
      
//       {msg.map((m) => (
//         <Messages2 msg={m} key={m.id} />
//       ))}
//     </div>
//   )
// }

// export default Message


import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";


import React, { useContext, useEffect, useState } from "react";

import { ChatContext } from "../context/ChatContext";

import Messages2 from "./Messages2";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  // console.log(messages)

  return (
    <div className="message">
      {messages.map((m) => (
        <Messages2 message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;