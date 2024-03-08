const CoreGame = ({word, letters, tempId}) => {

    return (
        <div id="box-game">
            <div className="core-game" ref={letters}>
                {
                    word.map((letter, idx) => (
                        <span key={`${idx}${tempId}`} className="letter">
                            
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default CoreGame