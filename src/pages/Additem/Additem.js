import { useForm } from "react-hook-form";
import React from 'react';

const Additem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://salty-wave-25519.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=> res.json())
            .then(result =>{
                console.log(result);
            } )
    };
    return (
        <div className="mb-5">
            <div className="w-50 mx-auto mh  mt-5 mb-5">
            <h2 className="mt-5"> Add inventory Items</h2>
            
      
          <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
         <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
         <input className='mb-3' placeholder='Supplier' {...register("suppliername", { required: true, maxLength: 20 })} />
        <textarea className='mb-3' placeholder='Description' {...register("Shortdescription")} />
        <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
         <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
        <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
        <input className="btn btn-primary" type="submit" value="Add Items" />
</form>

</div>
        </div>
    );
};

export default Additem;