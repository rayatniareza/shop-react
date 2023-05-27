import useProducts from "../../common/apis/useProducts"

const Home = ()=>{
    const { getAllProducts } = useProducts()
    const products = getAllProducts().map( product => {
        return ( <div> {product} </div>)
    })
     return ( <List data={products}/>)
}

export default Home