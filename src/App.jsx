import './styles/App.css'
import { useEffect, useState } from 'react'
import Form from './components/Form/Form'
import Title from './components/Title/Title'
import SecondaryButton from './components/Button/SecondaryButton'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import FormCompartilhe from './components/Form/FormCompartilhe'

function App() {
  const [productsList] = useState([])
  const [page, setPage] = useState('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

  const fazRequisicao = async () => {
    const response = await fetch(page)
    const json = await response.json()

    const { products, nextPage } = json

    const newProductList = products.map((element) => <Product productData={element} />)

    setPage(`https://${nextPage}`)
    productsList.push(newProductList)
  }

  useEffect(() => {
    fazRequisicao()
  }, [])

  return (
    <div className="App">
      <Header />

      <section className='formulario-sec' id="ajude-o-algoritmo">
        <Form />
      </section>

      <section className='produtos-section' id='produtos'>
        <Title text='Sua seleção especial' />

        <div className='produtos-grid'>
          {productsList}
        </div>

        <SecondaryButton type='secondary' text='Ainda mais produtos aqui!' clickHandler={fazRequisicao} />
      </section>

      <FormCompartilhe />
      <Footer />
    </div>
  )
}

export default App
