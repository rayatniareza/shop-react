import { Route, Routes} from "react-router-dom"
import Dashboard from "./dashboard"
import StoreFront from "./storefornt"

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<StoreFront/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default AppRoutes