import { useEffect, useMemo } from "react"
import { useBasket } from "../../providers/Basket"

export default function ProductCard({data : product}) {
    const { state , handleAdd, handleRemove } = useBasket()
    useEffect(()=>{
        console.log( state);
    }, [ state])
    function handleIncrease(){
        handleAdd( product )
    }
    function handleDecrease(){
        handleRemove( product )
    }
    return ( 
    <div className="p-4 rounded mx-4 my-2 bg-gray-100 block">
        <div className="w-fit bg-gray-500">{product.title}</div>
        <div className="flex">
            <button className="rounded-full bg-green-500 w-6 h-6 text-center text-white" onClick={()=>handleIncrease()}>+</button>
            <div className="w-6 text-center">{product?.count??0}</div>
            <button className="rounded-full bg-red-500 w-6 h-6 text-center text-white" onClick={()=>handleDecrease()}>-</button>
        </div>
    </div>
    )
} 