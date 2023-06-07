import List from "../../common/components/List"
import ProductCard from "../../common/elements/Holders/ProductCard"
import Basket from "../../common/elements/Basket"
import useProducts from "../../common/apis/useProducts"

const Home = () => {
    const { data } = useProducts()
    return ( 
        <div className="container mx-auto mt-24 mb-16">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                <List data={data}>
                    <ProductCard/>
                </List>
            </div>
            <div><Basket/></div>
        </div>)
}

export default Home