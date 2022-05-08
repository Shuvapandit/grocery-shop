import { useEffect, useState } from "react";

const useItems=()=>{
    const [mitems,setmitems]=useState([])
      useEffect(()=>{
        fetch(`https://salty-wave-25519.herokuapp.com/item`)
       .then(res=>res.json())
       .then(data=>setmitems(data))
},[])
return [mitems,setmitems]

}
export default  useItems;

