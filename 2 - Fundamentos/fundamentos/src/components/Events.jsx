const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }  

    const renderSomething = (x) => {
        if (x){
            return (
                <h1>Renderizando verdadeiro.</h1>
            )
        }
        else{
            return (
                <h1>Renderizando falso.</h1>
            )
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            {renderSomething(true)}
        </div>
    )

}

export default Events