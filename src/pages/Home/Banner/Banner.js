import React from 'react';
import {  Carousel } from 'react-bootstrap';
import img1 from '../../../Images/bgimg/1.jpg'
import img2 from '../../../Images/bgimg/2.png'
import img3 from '../../../Images/bgimg/3.jpg'
import img4 from '../../../Images/bgimg/offer.jpg'

import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-5' >
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50  "
      src={img1}
      alt="First slide" width="50%" height="584px"
    />
    <Carousel.Caption >
   
      <h1 className='   text-capitalize mrgn  text-start'> 
      we are available <br></br> online and offline also <span className='spnc '>...!</span></h1>
     
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 "
      src={img2}
      alt="second slide" width="50%" height="584px"
    />

    <Carousel.Caption>
    <h1 className='  text-capitalize mrgn  text-start'>Tasty And Healthy  Organic Food<span className='spnc'>...!</span></h1>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 " 
      src={img3}
      alt="Third slide" width="50%" height="584px"
    />

    <Carousel.Caption>
    <h1 className='  text-capitalize mrgn  text-start  '>We are Selling Quality food at an affordable price <span className='spnc'>...!</span>  </h1>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

           <div className='mt-5 p-5' >
             <div className='flex-auto mt-5 mb-5   img-fluid  ...  hgwit'>
             <img src={img4} alt=""/>
             </div>

             </div> 
        </div>
    );
};

export default Banner;