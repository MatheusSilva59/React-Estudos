import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from '../hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([])

  // 4 - custom
  const { data: items, httpConfig, loading, error } = useFetch(url)


  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const [removeId, setRemoveId] = useState('')
  // Aula 1

  // useEffect(() => {

  //   async function fetchData() {

  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }

  //   fetchData()

  // }, [])


  // 2 - add products

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = { name, price }
    httpConfig('POST', product)
    // const config = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // }
    // const { data } = useFetch(url, config, 'POST')

    // // 3 - NewData

    // const newData = await data.json()

    // setProducts((prev) => [...prev, newData])

    setName('')
    setPrice('')
  }

  return (
    <>
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {!loading && items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button className='removeButton' onClick={() => httpConfig('DELETE', product.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div className='add-product'>
        <form>
          <label>
            <input type="text" name="productName" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <input type="number" name="price" placeholder='Preço' value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading && <button type='submit' disabled>Aguarde</button>}
          {!loading && <button type='submit' onClick={handleSubmit}>Adicionar</button>}
        </form>
      </div>
    </>
  )
}

export default App
