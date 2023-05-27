const List = ({elements}) => {
    return (
        elements.map((element, index)=>{
            //return (<div>{element}</div>)
            return React.createElement( elemetType, {key:index}, element)
        })
    )
}