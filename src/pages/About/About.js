import React from 'react';
import img1 from '../../Images/bgimg/about1.jpg'
import img2 from '../../Images/aboutimg/brand.png'
import img3 from '../../Images/aboutimg/rice.png'
import img4 from '../../Images/aboutimg/vegetable.png'

import './About.css'

const About = () => {
    return (
        <div>
            <div className='container mt-5'>
  <div className='row mt-6'>
    <div className='col mt-5 wh'>
    <img src={img1} alt=""/>
    </div>
   
    <div className='col mt-5'>
      <p className='knwm h5 text-start'>KNOW MORE ABOUT SHOP</p>
      <p className='text-start h1'>Trusted Food <br></br> Store</p>
      <p className='tx '>Sellers who aspire to be good, do good, and spread goodness. We democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p>
      <p className='fw-bold text-start'>Shuva Chakraborty</p>
      <p className=' text-start'>Go-Grocery Driector</p>
    </div>
  </div>
  {/* 2nd part */}
  <div className='mt-6 xc'>
  <div className='container mb-5 mt-5  '>
  <p className='h1 mt-6 mb-5'>Why Choose Us <span className='knwm'>.</span></p>
  <div className='row'>
    <div className='col border border-3'>
   <div className='ig p-3'>
   <img src={img2} alt=""/>
   </div>
   <p className='fn h5 mb-4'>All Kind Brand</p>
    </div>
    <div className='col border border-3'>
    <div className='ig p-3'>
    <img src={img3} alt=""/>
    </div>
    <p className='fn h5 mb-4'>All types of Grocery Items</p>
    </div>
    <div className='col border border-3'>
    <div className='ig p-3'>
    <img src={img4} alt=""/>
    </div>
    <p className='fn h5 mb-4'>Pesticide Free Goods</p>
    </div>
  </div>
</div>
  </div>

</div>
   
        </div>
    );
};

export default About;