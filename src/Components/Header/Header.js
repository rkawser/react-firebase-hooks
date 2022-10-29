import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'
const auth = getAuth(app);
const Header = () => {
const [user] = useAuthState(auth);

    return (
        <div className='header-container'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/order'>Order</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName}</span>
            </nav>
            
        </div>
    );
};

export default Header;