import { useState } from "react"

const ListRender = () => {

    const [list, setList] = useState(['Matheus', 'Pedro', 'Tonho', 'Januário'])

    const deleteName = () => {
        const randomNumber = Math.floor(Math.random() * (list.length - 1))
        setList((prevNames) => {
            return prevNames.filter((name) => name != list[randomNumber])
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={deleteName}>Deletar nome.</button>
        </div>
    )
}

export default ListRender