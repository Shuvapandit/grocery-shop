
import React, { useEffect, useState } from 'react';
import Item from '../Home/Item/Item';
import './Items.css'

const Items = () => {
    const [items,setitems]=useState([]);
    useEffect(()=>{
        fetch('Items.json')
        .then(res=>res.json())
        .then(data=>setitems(data))
    },[])
    return (
        <div id="items"  className='container container-fluid'>
        <div className="row">
        <h1 className=' text-center mt-1 mb-5'> Items</h1>
        <div className='items-container'>
        {
            items.map(item => <Item

                key={item.id}
                item={item}
            >
            </Item>)
        }
        </div>
        </div>
    </div>
        
    );
};

export default Items;