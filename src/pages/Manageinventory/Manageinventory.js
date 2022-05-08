

import deletebtn from '../../Images/Icons/delete.png'

import React from 'react';
import './Manageinventory.css'
import useItems from "../../hooks/useItems";



const Manageinventory = () => {
    
const [mitems,setmitems]=useItems([]);


const handleDelete = id => {
 const proceed = window.confirm('Are you Sure You want to delete?');
 if (proceed) {
 const url=`https://salty-wave-25519.herokuapp.com/item/${id}`;
 fetch(url, {
  method: "DELETE" })
.then(res => res.json())
.then(data => {console.log(data);
const remaining = mitems.filter(mitem => mitem._id !== id);
                    setmitems(remaining);
                   
                })
            
        }
    }
    return (
        <div className='  mb-5'>
        <h2 className="mt-5">Manage Inventory</h2>
        {
            mitems.map(mitem=><div 
                key={mitem._id}>
     
             </div>)
        }
      <div>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                           
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mitems.map(mitem => {
                                return (<tr>
                                   
                                    <td>{mitem.name}</td>
                                    <td>{mitem.price}</td>
                                    <td>{mitem.quantity}</td>
                                    <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(mitem._id)}>
                                        <img className="imgb" src={ deletebtn } alt="" />
                                    </button></td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

       
    </div>
    );
};

export default Manageinventory;




   
   
