import React from 'react'

const List = ({ data, children}) => {
    return (
        data?.map( ( element, index) => {
            return (<div key={index}>{React.cloneElement( children, element)}</div>)
        })
    )
}
export default List