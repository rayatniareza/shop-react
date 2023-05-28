import { createContext, useContext, useReducer } from "react";

const BasketContext = createContext()

function basketReducer( state, action ) {
    switch( action.type ){
        case 'ADD_ITEM':
            return state
        case 'REMOVE_ITEM':
            return state
        default:
            return state
    }
}

export const useBasket = () => {
    const { state, dispatch} = useContext( BasketContext )

    const handleAdd = (item) => {
        dispatch({type:'Add_ITEM', payload: item})
    }
    const handleRemove = (item) => {
        dispatch({type:'REMOVE_ITEM', payload: item.id})
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