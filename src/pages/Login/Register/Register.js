import React, { useState } from 'react';
import './Register.css'

import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../ScoialLogin/SocialLogin';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ]= useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }
    if(loading || updating){
        return <Loading></Loading>
      }
    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
  
    return (
        <div className='register-form'>
        <div id='' className='mtop'>

       
 <div className='container mt-5 w-25  shadow-lg p-3 mb-5 bg-white rounded"'>
<h2 className=' text-center mt-3 mtc p-2'>Please Register</h2>
 <form onSubmit={handleRegister} className='w-100 pb-5 p-2'>
 <input className="mb-3 text-start w-100"  type="text" name="name" id="" placeholder='Your Name'/>
                
 <input className="mb-3 text-start w-100"  type="email" name="email" id="" placeholder='Email Address' required/>
                
 <input className="mb-3 text-start w-100"  type="password" name="password" id="" placeholder='Password' required/>
 <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                
  <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Go-Grocery Terms and Conditions</label>              

  <input
                    disabled={!agree}
                    className='w-50  mx-auto btn btn-primary mb-1 clgn mt-2'
                    type="submit"
                    value="Register" />
  
        
        </form>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        
        <SocialLogin></SocialLogin>
        </div>
        
        </div>
       
        </div>
    );
};

export default Register;