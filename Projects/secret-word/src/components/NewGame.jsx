const NewGame = ({handlePage}) => {
  return (
    <div className="block-newgame">
        <h1>Secret Word</h1>
        <p className="highlighted">Clique no botão abaixo para começar a jogar</p>
        <button onClick={() => {handlePage('Game', true)}}>COMEÇAR O JOGO</button>
    </div>
  )
}

export default NewGame