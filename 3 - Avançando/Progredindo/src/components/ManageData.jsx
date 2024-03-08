import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const handleData = () => {
        someData = 15
    }

    const [number, setNumber] = useState(10)

    return (
        <>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={handleData}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar Variável (UseState)</button>
        </div>
        </>
    )
}

export default ManageData;