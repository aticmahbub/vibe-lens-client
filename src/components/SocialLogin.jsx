import React, { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvidee';
import useAuth from '../hooks/useAuth';

const SocialLogin = () => {
    const {googleLogin} =useAuth()

    return (
        <div>
            <div className="divider">continue with </div>
            <div>
                <button onClick={()=>googleLogin()} className='btn btn-primary'>Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;