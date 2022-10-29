import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Register page</h3>
            <form >
                <input type="name" name="" id="" placeholder='name' /> <br />
                <input type="text" placeholder='Email' /><br required />
                <input type="password" placeholder='Password' /><br />
                <input type="submit" value="register" />

            </form>
        </div>
    );
};

export default Register;