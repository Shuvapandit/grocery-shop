import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../Banner/Banner';
import './Home.css'
import Item from './Item/Item';



const Home = (item) => {
    const [items,setitems]=useState([]);
    const sliceditems = items.slice(0, 20);

   
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
           <button  className='mb-5 p-2 mib rounded h6'>Manage Inventory</button>
           </Link>
           </div>
        </div>
    );
};

export default Home;