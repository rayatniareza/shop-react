import {BasketProvider} from "../common/providers/Basket"
import Home from "../storefornt/Home"
const StoreFront = () => {
    return (
        <div>
            <BasketProvider>
                <Home/>
            </BasketProvider>
        </div>
    )
}
export default StoreFront