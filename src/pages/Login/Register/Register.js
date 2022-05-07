import React from 'react';
import { Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../ScoialLogin/SocialLogin';

const Register = () => {
    const navigate =useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }
    const handleRegister =  event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
  
    return (
        <div className=''>
        <div id='' className='mtop'>

       
        <div className='container mt-5 w-25  shadow-lg p-3 mb-5 bg-white rounded"'>
            <h2 className=' text-center mt-3 mtc p-2'>Please Register</h2>
            <form onSubmit={handleRegister} className='w-100 pb-5 p-2'>
                <input className="mb-3 text-start w-100"  type="text" name="name" id="" placeholder='Your Name'/>
                
                <input className="mb-3 text-start w-100"  type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input className="mb-3 text-start w-100"  type="password" name="password" id="" placeholder='Password' required/>
               

  
    <Button className=' bg-primary clgn w-50 mb-1' type="submit">

       LogIn
        </Button>
        
        </form>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        
        <SocialLogin></SocialLogin>
        </div>
        
        </div>
       
        </div>
    );
};

export default Register;