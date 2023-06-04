// import React from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile =(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }

    useEffect(()=>{
        const unsubscrive= onAuthStateChanged(auth, current=>{
            setUser(current);
            setLoading(false)
        })

        return () => {
            return unsubscrive
        }
    },[])

    const authInfo = {
        user, loading, login, signUp, logOut, updateUserProfile, googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;