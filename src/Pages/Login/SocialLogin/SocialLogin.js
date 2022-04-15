import React from 'react';
import googleLogo from "../../../images/googleLogo.png";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading || loading1)
    {
        return <Loading></Loading>
    }

    if (error || error1) {
            errorElement = <div>
                <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
            </div>
        
    }

    if (user || user1) {
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-outline-dark w-50 mx-auto d-block '>
                <img style={{ width: '30px' }} src={googleLogo} alt="" />
                <span style={{ marginLeft: '2px' }}>Google Sign In</span>
            </button>
            <button className='btn btn-outline-dark w-50 mx-auto d-block my-2'>
                <img style={{ width: '30px' }} src={facebook} alt="" />
                <span >acebook Sign In</span>
            </button>
            <button
            onClick={() => signInWithGithub()}
             className='btn btn-outline-dark w-50 mx-auto d-block'>
                <img style={{ width: '30px' }} src={github} alt="" />
                <span style={{ marginLeft: '2px' }}>Github Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;