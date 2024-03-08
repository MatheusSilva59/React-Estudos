import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import NewGame from './components/NewGame'
import GameOver from './components/GameOver'
import GameWin from './components/GameWin'

function App() {

  const words = [{ word: "banana", tip: "fruta" }, { word: "uva", tip: "fruta" }, { word: "macaco", tip: "animal" }, { word: "elefante", tip: "animal" }, { word: "jacaré", tip: "animal" }, { word: "orca", tip: "animal" }, { word: "morango", tip: "fruta" }, { word: "maça", tip: "fruta" }, { word: "laranja", tip: "fruta" }, { word: "caqui", tip: "fruta" }, { word: "limão", tip: "fruta" }, { word: "tomate", tip: "fruta" }, { word: "tangerina", tip: "fruta" }, { word: "teclado", tip: "objetos" }, { word: "mouse", tip: "objetos" }, { word: "monitor", tip: "objetos" }, { word: "garrafa", tip: "objetos" }, { word: "oceano", tip: "natureza" }, { word: "rio", tip: "natureza" }, { word: "montanha", tip: "natureza" }]
  const [page, setPage] = useState('NewGame')
  const [scoreMain, setScoreMain] = useState(0)

  const handlePage = (e, reset = false) => {
    setPage(e)

    if (reset){
      setScoreMain(0)
    }
    
  }

  const handleMainScore = (e) => {
    setScoreMain((prev) => prev + e)
  }

  return (
    <>
      {
        page === 'NewGame' ?
          <NewGame handlePage={handlePage} />
          :
          page === 'Game' ?
            <Game words={words} handlePage={handlePage} handleMainScore={handleMainScore} />
            :
            page === 'GameOver' ?
              <GameOver handlePage={handlePage} score={scoreMain} />
              :
              <GameWin handlePage={handlePage} />
      }
    </>
  )
}

export default App
