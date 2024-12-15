import React, { useContext } from 'react';
import AuthContext from '../context/AuthContex';

const SocialLogin = () => {
    const {googleLogin}= useContext(AuthContext)
   const handleSocialLogin=()=>{
        googleLogin()
    }
    return (
        <div className='m-4'>
            <div className=' divider '> or</div>
            <button onClick={handleSocialLogin} className='btn '> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;