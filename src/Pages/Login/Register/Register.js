import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';




const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if(loading || updating)
    {
        return <Loading></Loading>
    }

    const handleRegister = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
          alert('Updated profile');
        
        navigate('/home');

    }
    return (
        <div style={{ textAlign: 'center' }} className='register-form'>
            <h2>Please register</h2>
            <form onSubmit={handleRegister} action="">
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2' : 'ps-2 text-danger'} htmlFor="terms">Accepts Genius Car terms and conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accepts Genius Car terms and conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please login</Link></p>
            <SocialLogin></SocialLogin>
          
        </div>
    );
};

export default Register;