import React, { useContext } from 'react';
import AuthContext from '../context/AuthContex';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin, setUser}= useContext(AuthContext)
    const location =useLocation()
    console.log(location.state)
    const navigate= useNavigate()
   const handleSocialLogin=()=>{
        googleLogin()
        .then(result=>{
            const user= result.user
            console.log(user)
            setUser(user)
            navigate(location.state ? location.state: "/")
        })
        .catch(err=>{

        })
      
    }
    return (
        <div className='m-4'>
            <div className=' divider '> or</div>
            <button onClick={handleSocialLogin} className='btn '> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;