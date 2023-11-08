// import React, { useContext, useState } from 'react';
// import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
// import { db } from '../firebase';
// import { AuthContext } from '../context/AuthContext';

// const Search = () => {

//   const [userName, setUserName] = useState("");
//   const [user, setuser] = useState(null);
//   const [err, setErr] = useState(false);

//   const currentUser = useContext(AuthContext);


//   const handleSearch = async () => {
//     const q = query(
//       collection(db, "users"),
//       where("displayName", "==", userName)
//     );

//     try {
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         setuser(doc.data())
//       });
//     } catch (err) {
//       setErr(true);
//     }
//   };

//   const handleKey = (e) => {
//     e.code === "Enter" && handleSearch();
//   };


//   const handleSelect = async () => {
//     const combineId =
//       currentUser.uid > user.uid ?
//         currentUser.uid + user.uid :
//         user.uid + currentUser.uid;
//     try {
//       const res = await getDoc(doc(db, "chats", combineId)
//       );

//       if (!res.exists()) {
//         // help to create chat in chats collection
//         await setDoc(doc(db, "chats", combineId), { messages: [] });

//         // creating user chats
//         await updateDoc(doc(db, "userChats", currentUser.uid), {
//           [combineId + ".userInfo"]: {
//             uid: user.uid,
//             displayName: user.displayName,
//             photoURL: user.photoURL
//           },
//           [combineId + ".date"]: serverTimestamp(),
//         });

//         await updateDoc(doc(db, "userChats", user.uid), {
//           [combineId + ".userInfo"]: {
//             uid: currentUser.uid,
//             displayName: currentUser.displayName,
//             photoURL: currentUser.photoURL,
//           },
//           [combineId + ".date"]: serverTimestamp(),
//         });
//       }
//     } catch (err) { }
//     setuser(null);
//     setUserName("")
//   };


//   return (<>
//     <div className='search'>
//       <div className="searchbar">

//         <input type="text" placeholder='Find a Person...'
//           onKeyDown={handleKey}
//           value={userName} onChange={(e) => setUserName(e.target.value)} />

//       </div>

//       {err && <span>User not found!</span>}
//       {user && (
//         <div className="userChat" onClick={handleSelect}>
//           <img src={user.photoURL} alt="" />
//           <div className="userChatInfo">
//             <span>{user.displayName}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   </>
//   )
// };

// export default Search;


// import React, { useContext, useState } from 'react';
// import { collection, doc, getDoc,getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
// import { db } from '../firebase';
// import { AuthContext } from '../context/AuthContext';

// const Search = () => {

//   const [userName, setUserName] = useState("");
//   const [searchUser, setSearchUser] = useState(null);
//   const [err, setErr] = useState(false);

//   const currentUser = useContext(AuthContext);


//   const handleSearch = async () => {
//     const q = query(
//       collection(db, "users"),
//       where("displayName", "==", userName));

//     try {
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         setSearchUser(doc.data())
//       });
//     } catch (err) {
//       setErr(true);
//     }


//   };

//   const handleKey = (e) => {
//     e.code === "Enter" && handleSearch();
//   };


//   const handleSelect = async () => {
//     const combineId =
//       currentUser.uid > searchUser.uid ?
//         currentUser.uid + searchUser.uid :
//         searchUser.uid + currentUser.uid;
//     try {
//       const res = await getDoc(doc(db, "chats", combineId));

//       if (!res.exists()) {
//         // help to create chat in chats collection
//         await setDoc(doc (db, "chats", combineId), { messages:[] });

//         // creating user chats
//         const userChatDoc = doc(db, "userChats", currentUser.uid);
//         if (!(await getDoc(userChatDoc)).exists()) {
//           await setDoc(userChatDoc, {});
//         }
//         const searchUserChatDoc = doc(db, "userChats", searchUser.uid);
//         if (!(await getDoc(searchUserChatDoc)).exists()) {
//           await setDoc(searchUserChatDoc, {});
//         }

//         await updateDoc(userChatDoc, {
//           [combineId + ".userInfo"]: {
//             uid: searchUser.uid,
//             displayName: searchUser.displayName,
//             photoURL: searchUser.photoURL
//           },
//           [combineId + ".date"]: serverTimestamp(),
//         });
//         await updateDoc(searchUserChatDoc, {
//           [combineId + ".userInfo"]: {
//             uid: currentUser.uid,
//             displayName: currentUser.displayName,
//             photoURL: currentUser.photoURL,
//           },
//           [combineId + ".date"]: serverTimestamp(),
//         });
//       }
//     } catch (err) {}
//     setSearchUser(null);
//     setUserName("")
//   };


//   return (<>
//     <div className='search'>
//       <div className="searchbar">

//         <input type="text" placeholder='Find a Person...'
//           onKeyDown={handleKey}
//           value={userName} onChange={(e) => setUserName(e.target.value)} />

//       </div>

//       {err && <span>User not found!</span>}
//       {searchUser &&
//         <div className="userChat" onClick={handleSelect}>
//           <img src={searchUser.photoURL} alt="" />
//           <div className="userChatInfo">
//             <span>{searchUser.displayName}</span>
//           </div>
//         </div>
//       }
//     </div>
//   </>
//   )
// };

// export default Search;

import React, { useContext, useState } from "react";

import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp,getDoc} from "firebase/firestore";
import { db } from "../firebase";

import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };
  return (
    <div className='search'>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
