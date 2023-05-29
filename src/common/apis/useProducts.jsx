import { useQuery } from "react-query"
import axiosInstance from "./axiosInstance"

const api = {
    allProducts : '/products'
}
const service = {
    get : async ( url ) => {
        const {data} = await axiosInstance.get(url)
        return data
    }
}

export default function useProducts () {
    const { data } = useQuery({
        queryFn: ()=>service.get(api.allProducts)
    })
    return { data }
}

//export default useProducts