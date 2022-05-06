import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item,setitem]=useState([])
    useEffect(()=>{
        const url= `http://localhost:5000/item/${itemId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setitem(data))
    },[])
    return (
        <div className='mt-5'>
            
            <h2>Item Id Is: {item.name}</h2>
            <div className='text-center'>
                <Link to="/delevered">

                    <button className='btn '>Delivered</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;