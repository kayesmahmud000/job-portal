import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';


const AuthProvider = ({children}) => {
    const [user , setUser]=useState(null)
    const [loader , setLoader]=useState(true)
    const auth = getAuth(app)

    const createNewUser=(email , password)=>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser=(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email ,password)
    }
    const logOut =()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=   onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })

        return ()=>{
            unsubscribe()
        }
    }
     
   ,[] )
    const authInfo= {
        user,
        loader,
        createNewUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;