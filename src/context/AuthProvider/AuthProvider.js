import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth =  getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const appInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={appInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;