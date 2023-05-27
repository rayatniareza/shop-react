import { Route, Routes,  } from "react-router-dom"
import Dashboard from "./dashboard"
import Home from "./storefornt/Home"

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default AppRoutes