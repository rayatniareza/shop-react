import { useState } from "react"
import { useBasket } from "../../providers/Basket"

export default function ProductCard({data}) {
    const { handleAdd/*, handleRemove*/ } = useBasket()
    const [product, setProduct] = useState( data )
    function handleIncrease(){
        setProduct( ()=>handleAdd( product ) )
    }
    /* function handleDecrease(){
    //     setProduct( ()=> handleRemove( product ) )
    }*/
    return ( 
    <div class="max-w-xs">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
                <img src={product.image} alt={product.title} class="w-full h-56 object-cover"></img>
                <div class="absolute top-0 right-0 p-2 bg-indigo-500 text-white font-bold">Off</div>
            </div>
            <div className="py-4 px-6">
                <h3 className="text-xl font-semibold mb-2">{product?.title}</h3>
                        <p className="text-gray-600 mb-4">{product?.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-900 font-bold">{product.price}</span>
                            <button 
                                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                                onClick={()=>handleIncrease()} >Add to Cart {product?.count && `x ${product.count}`}</button>
                            {/*   product?.count &&
                                <button class="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            */}
                        </div>
            </div>
        </div>
    </div>
    )
} 


/*<!--<div className="flex">
                <button className="rounded-full bg-green-500 w-6 h-6 text-center text-white" onClick={()=>handleIncrease()}>+</button>
                <div className="w-6 text-center">{product?.count??0}</div>
                <button className="rounded-full bg-red-500 w-6 h-6 text-center text-white" onClick={()=>handleDecrease()}>-</button>
            </div>-->*/