import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <MyForm user={{ name: 'Matheus', email: 'matheus@gmail.com', bio: 'programmer', role: 'admin' }} />
    </>
  )
}

export default App
