import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item,setItem]=useState([])
    useEffect(()=>{
        const url= `https://salty-wave-25519.herokuapp.com/item/${itemId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[item])
     //handle qantity deliver item 
     const handleDeliverd = () => {
        const oldQuantity = parseInt(item.quantity)
        const quantity = oldQuantity - 1;
        const updatedQuantity = { quantity };
        console.log(updatedQuantity);

        //send data to  server

        const url = `https://salty-wave-25519.herokuapp.com/item/${itemId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            }) 
    }

    //handle restoke button
    const handleRestokeItem = event => {
        event.preventDefault();
        const oldQuantity = parseInt(item.quantity)
        const restoke = parseInt(event.target.restoke.value)
        const quantity = oldQuantity + restoke;
        // console.log(quantity);
        const updatedQuantity = { quantity };


        //send data to  server

        const url =`https://salty-wave-25519.herokuapp.com/item/${itemId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    }

    //navigate to manage inventory
    const navigate = useNavigate();
    const navigateTomanageInventoryitems = () => {
        navigate('/mangeitems')
    }
    return (
        <>

            <div className='d-flex justify-content-center  my-5'>

                <div className="card w-25 mt-5" style={{ width: "18rem" }}>
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.Shortdescription}</p>
                    <h6 className="card-title"><b>Quantity: </b>{item.quantity}</h6>
                    <p className="card-text"><b>Supplier: </b>{item.suppliername}</p>
                    <h6 className="card-title"><b>Price: </b>${item.price}per k.g</h6>
                     
                  
                    
                    <button onClick={() => handleDeliverd()} type="button" className="btn  w-50 btn-primary">
                            
                            Deliverd</button>
                    </div>
                </div>
                {/* restoke form */}

            </div>
            <div >
                <form onSubmit={handleRestokeItem} className='w-25 mx-auto my-5'>
                    <div className='mb-3'>
                        <label  htmlFor="exampleInputEmail1" className='form-label'>Add Amount You Want To Restock</label>
                        <input type="number" name='restoke' className='form-control' id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
             <button type="submit" className='btn w-50 btn-primary'> Restock</button>

                </form>

            </div>
            <div className=' container d-flex justify-content-end my-5 w-50'>
             <button onClick={() => navigateTomanageInventoryitems()} type="button" className="btn btn-primary"> Manage Inventory Items</button>
            </div>
        </>
    );
};

export default ItemDetail;