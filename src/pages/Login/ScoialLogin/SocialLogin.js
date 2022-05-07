import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Images/bgimg/google.png'
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user,loading,  error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if(loading){
        return <Loading></Loading>
    }
    if (error ) {
        errorElement =<p className='text-danger'>Error: {error?.message} </p>
 
    }
    if (user ) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
                <p className='mt-1 px-2'>OR</p>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button   onClick={() => signInWithGoogle()}
                 className='btn bg-primary   w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2 txtsclin'>Sign In With Google</span>
                </button>
                </div>
            
        </div>
            
        
    );
};

export default SocialLogin;