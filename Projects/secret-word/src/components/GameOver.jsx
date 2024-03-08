const GameOver = ({handlePage, score}) => {
    return (
      <div className="block-gameover">
          <h1>Fim de jogo!</h1>
          <h2>A sua pontuação foi de: {score}</h2>
          <button onClick={() => {handlePage('Game', true)}}>REINICIAR</button>
      </div>
    )
  }
  
  export default GameOver