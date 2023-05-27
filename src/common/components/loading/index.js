import { useIsFetching, useIsMutating } from "react-query"
import { useMemo } from "react"

const Loading = ({children}) => {
    const isFetching= useIsFetching()
    const isMutating= useIsMutating()
    const isLoading = useMemo(()=>{
        return isFetching && isMutating
    }, [ isFetching, isMutating ])
    return (
        <div className="">
            { isLoading ? <div className="hidden">Loading...</div> : children }
        </div>
    )
}

export default Loading