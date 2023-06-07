import { createContext, useContext, useReducer } from "react";
import { array } from "../../utility"

const BasketContext = createContext()

function basketReducer( state, action ) {
    let product = action.payload
    let id = product.id
    switch( action.type ){
        case 'UPDATE_ITEM':
            array.replaceOrAddItem( state, product, (item)=> item.id === id )
            return state
        case 'REMOVE_ITEM':
            array.findAndRemoveItem( state, (item)=> item.id === id)
            return state
        default:
            return state
    }
}

export const useBasket = () => {
    const { state, dispatch} = useContext( BasketContext )

    const handleAdd = (item) => {
        let id = item.id
        let product = state?.find(item=>item.id===id) ?? item
        let count = product?.count ?? 0
        count++ //check count with constraints ( inventory or limitation )
        product = { ...product, count }
        dispatch({type:'UPDATE_ITEM', payload: product})
        return product
    }
    const handleRemove = (item) => {
        let id = item.id
        let product = state?.find(item=>item.id===id) ?? item
        let count = product?.count ?? 0
        if ( count <= 1 ) {
            dispatch({type:'REMOVE_ITEM', payload: product})
        }else{
            count--
            product = { ...product, count }
            dispatch({type:'UPDATE_ITEM', payload: product})
        }        
        return product
    }
    return { handleAdd, handleRemove, state}
}

export const BasketProvider = ({children}) => {
    const [state, dispatch] = useReducer( basketReducer, [] )

    return (
        <BasketContext.Provider value={{state, dispatch}}>
            {children}
        </BasketContext.Provider>
    )

}