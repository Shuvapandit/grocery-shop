import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

/* Manage All items */
const Item = ({item}) => {
    
    
        const{id,name,img,price,Shortdescription,quantity,suppliername}=item;
        const navigate = useNavigate();

        const navigateToItemDetail = id =>{
            navigate(`/item/${id}`);
        }
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


                 
              <button onClick={() => navigateToItemDetail(id)} className='  btnn justify-content-start rounded p-2'> StockUpdate </button>
              </div>
             
              
              
              
           </div> 
          
            
            
    );
};

export default Item;