import React from 'react';
import img1 from '../../Images/contactimg/email.png'
import img2 from '../../Images/contactimg/telephone.png'
import img3 from '../../Images/contactimg/address.png'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='mtpp '>
            <div className='container px-4 mt-5 mb-5 '>
                <p className='h1 mt-5'>Contact Us!</p>
  <div className='row gx-5 mt-5'>
    <div className='col mt-5'>
     <div className='p-3 border bg-light'>
         <div>
         <img src={img1} alt=""/>
         </div>
         <div className='p-3'>
             <p className='h4'>Email Address</p>
         <p className=''>Chakrabortyshuva216@gmail.com</p>
         <p className=''>goGrocery@gmail.com</p>
         </div>
         
         </div>
    </div>
    <div className='col mt-5'>
     <div className='p-3 border bg-light'>
     <div className=''>
         <img src={img2} alt=""/>
         </div>
         <div className='p-3'>
             <p className='h4'>Phone Number</p>
         <p className=''>+01872451678</p>
         <p className=''>+01872451678</p>
         </div>
         </div>
    </div>
    <div className='col mt-5'>
      <div className='p-3 border bg-light'>
      <div>
         <img src={img3} alt=""/>
         </div>
        
         <div className='p-3'>
             <p className='h4'>Office Address</p>
         <p className=''>Mirpur 2</p>
         <p className=''>Dhaka, Bangladesh</p>
         </div>
          </div>
    </div>
  </div>
</div>

            </div>
            
        </div>
    );
};

export default Contact;