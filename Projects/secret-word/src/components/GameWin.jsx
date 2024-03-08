const GameWin = ({handlePage, score}) => {
    return (
      <div className="block-gameover">
          <h1>Parabéns!</h1>
          <h2>Você acertou todas as palavras.</h2>
          <button onClick={() => {handlePage('Game', true)}}>REINICIAR</button>
      </div>
    )
  }
  
  export default GameWin