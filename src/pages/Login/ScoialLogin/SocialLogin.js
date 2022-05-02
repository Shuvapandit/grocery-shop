import React from 'react';
import google from '../../../Images/bgimg/google.png'
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
                <p className='mt-1 px-2'>OR</p>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
            </div>
           
            <div className=''>
                <button
                 className='btn bg-primary   w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2 txtsclin'>Sign In With Google</span>
                </button>
                </div>
            
        </div>
            
        
    );
};

export default SocialLogin;