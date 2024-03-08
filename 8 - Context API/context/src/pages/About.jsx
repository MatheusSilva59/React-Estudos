import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const About = () => {
    const { counter } = useContext(CounterContext)
    return (
        <div>
            <h1>
                About
            </h1>
            <h3>Counter: {counter}</h3>
        </div>
    )
}

export default About