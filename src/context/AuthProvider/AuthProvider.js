import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth =  getAuth(app)



const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth);
    }  

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const appInfo = {
        user,
        googleLogin,
        loading,
        createUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={appInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;