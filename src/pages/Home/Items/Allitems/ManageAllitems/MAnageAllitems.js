import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ManageAllitems.css'
import React from 'react';


const MAnageAllitems = ({item}) => {
    const{name,img,price,Shortdescription,quantity,suppliername}=item;
      

      
    return (
        <div className="item  ">
        <div className='container-fluid'>

        
       <img className=' w-100 p-3 hgt' src={img} alt=""/>
       <div className='mt-2 border-top  '>
       <h4 className=''>{name}</h4>
       <p className='tttxd   '>{Shortdescription}</p>
       <p className='text-start' ><span className='h6 '>Quantity:</span>{quantity}</p>
       <p className='text-start'><span className='h6'>Supplier:</span>{suppliername}</p>
       <p className='text-start'><span className='h6'>Price:$</span>{price}  per k.g</p>
       </div>
       </div>
      <div className='p-3 '>

     
      <button className='delete-button w-25 justify-content-start rounded p-2'>
            <FontAwesomeIcon className='delete-icon ' icon={faTrashAlt}></FontAwesomeIcon>
            
        </button>
       </div>
        
   </div> 
  
    
    );
};

export default MAnageAllitems;