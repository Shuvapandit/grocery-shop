import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Login.css'
import SocialLogin from './ScoialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {

  const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate =useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
   
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigateRegister = event => {
    navigate('/register');
}
if(loading || sending){
  return <Loading></Loading>
}
if (user) {
  navigate(from, { replace: true });
}
if (error) {
  errorElement = <p className='text-danger'>Error: {error?.message}</p>
}
const handleSubmit = event => {
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  signInWithEmailAndPassword(email, password);
  


}
const resetPassword = async () => {
  const email = emailRef.current.value;
  if (email) {
      await sendPasswordResetEmail(email);
      toast('sent email');
  }
  else{
    toast('Please Enter your  email Address');
     
  }
}
 return (
<div className=''>
 <div id='' className='mtop'>
    
<div className='container mt-5 w-25  shadow-lg p-3 mb-5 bg-white rounded"'>
 <h2 className=' text-center mt-3 mtc p-2'>Please Login</h2>
 <Form onSubmit={handleSubmit} className='w-100 pb-5'>
 <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
 <Form.Label >Email address</Form.Label>
<Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
 </Form.Group >

 <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
 <Form.Label>Password</Form.Label>
   <Form.Control ref={passwordRef}   type="password" placeholder="Password" required/>
  </Form.Group>
  
   <Button className=' bg-primary clgn w-50 mb-1' type="submit">

     LogIn
   </Button>
        
   </Form>
  {errorElement}
    <p className=''>New to Go-Grocery..?<Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
    <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p> 
    <SocialLogin></SocialLogin>
    <ToastContainer />
    </div>
        
    </div>
       
        </div>
    );
};

export default Login;