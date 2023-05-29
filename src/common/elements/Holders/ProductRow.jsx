export default function ProductRow(product) {

    return ( 
    <div>
        <div>{product.title}</div>
        <div><div className="rounded bg-red-500">x</div>{product.count}</div>
    </div>)
} 