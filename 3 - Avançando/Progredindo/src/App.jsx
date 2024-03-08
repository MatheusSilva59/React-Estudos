// css
import { useState } from 'react'
import './App.css'

// images
import Autumn from './assets/fall-autumn-red-season.jpg'

//components
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {

  const name = 'Gaiteiro'
  const [userName, setUserName] = useState('Júlio')

  function showMessage(){
    console.log('Evento do componente pai.')
  }

  const [message, setMessage] = useState('Default message.')

  const handleMessage = (message) => {
    setMessage(message)
  }

  return (
    <>
      {/* Imagens em public */}
      <div>
        <img src="/pexels-photo-139575.jpeg" alt="Galaxy image" />
      </div>
      {/* Imagens em assets */}
      <div>
        <img src={Autumn} alt="Autumn" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails branch="Volkswagen" model="Polo Track" year={2024} km={0}/>

      <Container>
        <p>Conteúdo</p>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* State lift */}

      <Message message={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </>
  )
}

export default App
