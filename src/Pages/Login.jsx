
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

//from firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();


    const handleSumbit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className="container">
            <div className="wrapper">
                <span className="logo">Login To Chat</span> <br /><br />
                <span className="title">Login</span>

                <form onSubmit={handleSumbit}>
                    <input type="email" placeholder='Enter Email' required />
                    <input type="password" placeholder='Password' required />

                    <button> Sign In</button>

                    {err && <span>Something gone wrong..!</span>}

                </form>
                <p> You Don't Have an Account ? &nbsp;
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login