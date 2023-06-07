import { useIsFetching, useIsMutating } from "react-query"

const Loading = () => {
    const isFetching = useIsFetching()
    const isMutating = useIsMutating()
    return (
        <>
            { isFetching || isMutating ? 
                <div className="flex h-screen justify-center items-center">
                    <div className="inline-block animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"/>
                </div>
                :
                null 
            }
        </>
    )
}

export default Loading