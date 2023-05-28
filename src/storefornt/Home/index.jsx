import List from "../../common/components/List"
import ProductCard from "../../common/elements/Holders/ProductCard"
import Basket from "../../common/elements/Basket"
import useProducts from "../../common/apis/useProducts"

const Home = () => {
    const { data } = useProducts()
    return ( 
        <div>
            <div><List data={data}><ProductCard/></List></div>
            <div><Basket/></div>
        </div>)
}

export default Home