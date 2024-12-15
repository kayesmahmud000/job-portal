import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import RegisterAnimation from "../assets/Animation - 1733894519686.json"
import AuthContext from '../context/AuthContex';
import SocialLogin from '../Components/SocialLogin';

const RegisterPage = () => {
    const {createNewUser}=useContext(AuthContext)

     const handleRegister=e=>{
        e.preventDefault()
        const form= e.target
        const email =form.email.value
        const password= form.password.value
      
        createNewUser(email, password)
        .then(result=>{
            console.log(result.user)
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
                        
                       <Lottie animationData={RegisterAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold my-4 text-center mx-4">Register Now</h1>
                        <form onSubmit={handleRegister} className="card-body">
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;