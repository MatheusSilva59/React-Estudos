import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/products/${id}`
    const { data: item, httpConfig, loading, error } = useFetch(url)
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {item && (
                <div>
                    <h3>ID: {item.id}</h3>
                    <h3>Name: {item.name}</h3>
                    <h3>Price: R${item.price} </h3>
                    <Link to={`/products/${item.id}/additional`}>More information</Link>
                </div>
            )}
        </div>
    )
}

export default Product