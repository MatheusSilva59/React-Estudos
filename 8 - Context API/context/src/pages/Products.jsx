import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Products = () => {
    const { counter } = useContext(CounterContext)
    return (
        <div>
            <h1>
                Products
            </h1>
            <h3>Counter: {counter}</h3>
        </div>
    )
}

export default Products