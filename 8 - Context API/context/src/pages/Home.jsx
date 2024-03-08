import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
    const { counter, setCounter } = useCounterContext()
    const { color, dispatch } = useTitleColorContext()

    const setTitleColor = (color) => {
        dispatch({ type: color })
    }

    return (
        <div>
            <h1 style={{ color: color }}>
                Home
            </h1>
            <h3>Counter: {counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>Add Count</button>
            <button onClick={() => setCounter(counter - 1)}>Remove Count</button>
            <div>
                <h1>Change Title Color</h1>
                <button onClick={() => setTitleColor('RED')}>Red</button>
                <button onClick={() => setTitleColor('BLUE')}>Blue</button>
            </div>
        </div>
    )
}

export default Home