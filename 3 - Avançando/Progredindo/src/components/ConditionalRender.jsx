import { useState } from "react"

const ConditionalRender = () => {

    const [x, setX] = useState(true)

    const handleX = () => {
        if (x){
            setX(false)
        }
        else{
            setX(true)
        }
    }

    return (
        <div>
            <button onClick={() => x ? setX(false) : setX(true)}>Change X status</button>
            <h1>Isso será exibido?
                {x ? (
                    <p>Se X for verdadeiro.</p>
                ) : (
                    <p>Se X for falso.</p>
                )}
            </h1>
        </div>
    )
}

export default ConditionalRender