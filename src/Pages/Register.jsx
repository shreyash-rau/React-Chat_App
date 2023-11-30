
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// image 
import Add from "../image/addAvatar.png";

// from firebase 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from 'firebase/firestore';


const Register = () => {

    const [err, setErr] = useState(false);
    const [ loading, setLoading ] = useState(false);

    // used to navigate after reguster to home page
    const navigate = useNavigate();

   
    const handleSumbit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };



    return (
        <div className="container">
            <div className="wrapper">
                <span className="logo">Register For Chatting</span> <br/><br/>
                <span className="title">Register - fill </span>

                <form onSubmit={handleSumbit}>

                    <input type="text" placeholder='Enter Name' required />
                    <input type="email" placeholder='Enter Email' required />
                    <input type="password" placeholder='Password' required />

                    <input style={{ opacity: 0, position: 'absolute', zIndex: -1 }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Select Profile Photo</span>
                    </label>

                    <button disabled={loading}>Sign up</button>
                    {loading && "Uploading and compressing the image please wait..."}

                    {err && <span>Something went wrong..!</span>}

                </form>
                
                <p> Do You Have an Account?    &nbsp;
                    <Link to="/login">LOGIN</Link>
                </p>
            </div>
        </div>
    )
}

export default Register
