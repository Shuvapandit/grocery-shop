import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    return (
        <div className='mt-5'>
            
            <h2>Item Id Is: {itemId}</h2>
            <div className='text-center'>
                <Link to="/delevered">

                    <button className='btn '>Delivered</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;