import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const FirebaseProvidee = ({children}) => {

    

    //create user
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const allValues ={
        createUser
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvidee;