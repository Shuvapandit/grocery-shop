
import React, { useEffect, useState } from 'react';

import MAnageAllitems from './ManageAllitems/MAnageAllitems';

const Allitems = () => {
    const [items,setitems]=useState([]);
   
    useEffect(()=>{
        fetch('Items.json')
        .then(res=>res.json())
        .then(data=>setitems(data))
    },[])
    return (
        <div id="items"  className='container container-fluid'>
        <div className="row">
        <h1 className=' text-center mt-1 mb-5'>Inventory Items</h1>
        <div className='items-container'>
        {
            items.map(item => <MAnageAllitems

                key={item.id}
                item={item}
            >
            </MAnageAllitems>)
         

             
            
        }
        </div>
       
        </div>
      
    </div>
    );
};

export default Allitems;
