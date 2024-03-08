import React from 'react'
import { useParams } from 'react-router-dom'

const Additional = () => {
    const { id } = useParams()
    return (
        <div>
            Additional information about the product ID: {id}
        </div>
    )
}

export default Additional