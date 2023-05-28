import List from "../../components/List"
import { useBasket } from "../../providers/Basket"
import ProductRow from "../Holders/ProductRow"

const Basket = () => {

    const {state: {items}} = useBasket

    return ( <div>
        { 
            items?.length === 0 ?
                <div>List are empty</div> 
            :
                <List data={items}><ProductRow/></List> 
        }
    </div>)
}

export default Basket