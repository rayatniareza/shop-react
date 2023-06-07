import TopNavbar from "../common/components/TopNav"
import { BasketProvider } from "../common/providers/Basket"
import Home from "../storefornt/Home"

const StoreFront = () => {
    return (
        <div className="bg-gray-50">
            <TopNavbar/>
            <BasketProvider>
                <Home/>
            </BasketProvider>
        </div>
    )
}
export default StoreFront