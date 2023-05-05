import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../Firebase/Firebase';


export const AuthContext = createContext();

const AccountContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'sujon' })
    const [profileImg, setProfileImg] = useState()
    const [registerEmail, setRegisterEmail] = useState(null)

    const auth = getAuth(app)

    const authInfo = {
        profileImg, setProfileImg, registerEmail, setRegisterEmail, user, setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AccountContext;