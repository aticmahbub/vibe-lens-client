import React, { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvidee';

const useAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default useAuth;