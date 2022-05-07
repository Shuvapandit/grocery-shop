import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link,  useNavigate } from 'react-router-dom';
import './Login.css'
import SocialLogin from './ScoialLogin/SocialLogin';




const Login = () => {

  const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate =useNavigate();
    
  
  const navigateRegister = event => {
    navigate('/register');
}

const handleSubmit = event => {
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  console.log(email, password);


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
        <p className=''>New to Go-Grocery..?<Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
    
        <SocialLogin></SocialLogin>
        </div>
        
        </div>
       
        </div>
    );
};

export default Login;