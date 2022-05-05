import React from 'react';
import './Hitems.css'

const Hitems = (props) => {
    const{name,img,price,Shortdescription,quantity,suppliername}=props.item;
    return (
        <div id="items"  className='container container-fluid'>
        <div className="row">
        <h1 className=' text-center mt-1 mb-5'>Inventory Items</h1>
        <div className='items-container'>
        </div>
        
        </div>
     
         
 <button  className='mb-5 p-2 mib rounded h6'>Manage Inventory</button>
          
    
       
        
    </div>
        

            
        
   
    );
};

export default Hitems;