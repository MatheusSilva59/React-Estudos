const CarDetails = ({branch, model, year, km}) => {
    return (
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Marca: {branch}</li>
                <li>Modelo: {model}</li>
                <li>Ano: {year}</li>
                <li>Quilometragem: {km}</li>
            </ul>
        </div>
    )
}

export default CarDetails