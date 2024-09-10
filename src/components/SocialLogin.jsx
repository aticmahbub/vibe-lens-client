import React, { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvidee';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin} =useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const handleSocialLogin = (googleLogin) =>{
        googleLogin()
        .then(result => {
            if (result.user) {
                navigate(from)
            }
        })
    }
    return (
        <div>
            <div className="divider">continue with </div>
            <div>
                <button onClick={()=> handleSocialLogin(googleLogin())} className='btn btn-primary'>Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;