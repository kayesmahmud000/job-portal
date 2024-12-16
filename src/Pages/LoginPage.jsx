import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import LoginAnimation from "../assets/login.json"
import AuthContext from '../context/AuthContex';
import SocialLogin from '../Components/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const {loginUser ,setUser}=useContext(AuthContext)
    const location =useLocation()
    const navigate= useNavigate()

    const handleLogin=e=>{
        
        e.preventDefault()
        const form= e.target
        const email =form.email.value
        const password= form.password.value

        loginUser(email, password)
        .then(result=>{
            const user=result.user
            setUser=(user)
            navigate(location.state? location.state:"/")
        })
        .catch(error=>{
            console.log(error)
        })
      
        
     }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-96  lg:text-left">
                        
                       <Lottie animationData={LoginAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold my-4 text-center mx-4">Login Now</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default LoginPage;