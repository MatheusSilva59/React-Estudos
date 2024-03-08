import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get('q'))

    const url = `http://localhost:3000/products?name=${searchParams.get('q')}`
    console.log(url)
    const { data: items, loading, error } = useFetch(url)
    return (
        <div>
            <div>
                Search
            </div>
            {items && (
                <div>
                    <h1>
                        Products
                    </h1>
                    {error && <p>{error}</p>}
                    <ul className="products">
                        {items.map(item => (
                            <li key={item.id}>
                                <h2>
                                    {item.name}
                                </h2>
                                <h3>
                                    R$: {item.price}
                                </h3>
                                <Link to={`/products/${item.id}`}>Details</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Search