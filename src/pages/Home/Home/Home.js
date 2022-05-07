import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../../Images/aboutimg/brand.png'
import img3 from '../../../Images/aboutimg/rice.png'
import img4 from '../../../Images/aboutimg/vegetable.png'

import Banner from '../Banner/Banner';
import './Home.css'
import Item from './Item/Item';



const Home = (item) => {
    const [items,setitems]=useState([]);
    const sliceditems = items.slice(0, 6);

   
    useEffect(()=>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>setitems(data))
    },[])

 
    return (
        <div>
            <Banner></Banner>
           
            <div id="items"  className='container container-fluid'>
        <div className="row">
        <h1 className=' text-center mt-1 mb-5'>Inventory Items</h1>
        <div className='items-container'>
            {
     
     sliceditems.map(item=><Item key={item._id}
      item={item}>
     </Item> )
   }
           </div>
           </div> 
           <Link to={'/mangeitems'}>
           <button  className='mb-2 p-2 mib rounded h6'>Manage Inventory</button>
           </Link>
           
           </div>

           <div className='mt-4 xc'>
  <div className='container mb-5 mt-3  '>
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
    );
};

export default Home;