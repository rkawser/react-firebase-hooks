import React from 'react';
import './Login.css';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.form?.pathname || "/"

    const handleLogIn = () => {
        signInWithGoogle()
            .then(() => {

                navigate(from,{ replace:true})

            })
    }


    return (
        <div>
            <h2>Please Login</h2>
            <div className='login-container'>
                <div>
                    <h5>login with manual</h5>
                    <form >
                        <input type="text" placeholder='Email' /><br />
                        <input type="password" placeholder='Email' /><br />
                        <input type="submit" value="login" />
                    </form>
                </div>

                <div>
                    <h5> login with goggle</h5>
                    {user?.uid ?
                        <button onClick={() => signOut(auth)} style={{ 'color': "red" }}>Sign Out</button>
                        :
                        <button onClick={handleLogIn} style={{ 'color': "green" }}>signInGoogle</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;