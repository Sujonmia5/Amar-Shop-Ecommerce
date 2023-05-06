import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase';


export const AuthContext = createContext();

const AccountContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [registerEmail, setRegisterEmail] = useState(null)
    const [loader, setLoader] = useState(false)

    const auth = getAuth(app)

    const registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const loginHandler = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        registerEmail, setRegisterEmail, user, setUser, registerUser, updateUser, setLoader, loader, loginHandler,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => unSubscribe()
    }, [auth])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AccountContext;