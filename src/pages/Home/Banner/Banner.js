import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import img1 from '../../../Images/bgimg/1.jpg'
import img2 from '../../../Images/bgimg/2.png'
import img3 from '../../../Images/bgimg/3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100  "
      src={img1}
      alt="First slide" width="800px" height="584px"
    />
    <Carousel.Caption >
   
      <h1 className=' fw-bold  text-capitalize mrgn '> Safety first. we are concerned about our customer's safety during this pandemic situation.</h1>
      <>
      <div className="mb-2 ">
    <Button className='' size="lg">
      Large button
    </Button>{' '}
    </div>
      </>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={img2}
      alt="second slide" width="800px" height="584px"
    />

    <Carousel.Caption>
    <h1 className='  fw-bold text-capitalize mrgn  f'>Tasty And Healthy  Organic Food. We are committed to our customers by serving our Quality foods. </h1>
    <div>
      <Button  className='bttn' variant="" size="lg">
      Contact Us
    </Button>{' '}
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 " 
      src={img3}
      alt="Third slide" width="800px" height="584px"
    />

    <Carousel.Caption>
    <h1 className='  fw-bold  text-capitalize mrgn  '>We are Selling Quality food at an affordable price.   </h1>
    <div>
      <Button  className='bttn' variant="" size="lg">
      Contact Us
    </Button>{' '}
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Banner;