import { createContext, useState } from 'react'

// Creating context
export const CounterContext = createContext()

// Creating provider

export const CounterContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )

}