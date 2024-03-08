import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchForm = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${query}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setQuery(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Search" />
            </div>
        </form>
    )
}

export default SearchForm