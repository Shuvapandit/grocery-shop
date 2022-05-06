import { useEffect, useState } from "react";

const useItems=()=>{
    const [mitems,setmitems]=useState([])
      useEffect(()=>{
        fetch(`http://localhost:5000/item`)
       .then(res=>res.json())
       .then(data=>setmitems(data))
},[])
return [mitems,setmitems]

}
export default  useItems;

