import Head from 'next/head'
import Layout from '../app/layout'
import axios from "axios"
import { useContext, useEffect } from 'react'
import { Store } from '../app/store/store'

export default function Home() {
  const {dispatch} = useContext(Store)

  useEffect(async () => {
    const response = await axios('api/products')
    const data = await response.data
  
    const productsCategories = data.reduce((productsBycategorie, product) => {
      productsBycategorie[product.categorie] = productsBycategorie[product.categorie] || []
      productsBycategorie[product.categorie].push(product)
      return productsBycategorie
    }, {})

    dispatch({
      reducer: 'PRODUCTS',
      type: 'ADD_PRODUCTS',
      payload: {...productsCategories, hashi: []},
    })
  }, [])
  
  return (
    <>
      <Head>
        <title>Sushi House </title>
        <meta name="description" content="App for sushi house" />
      </Head>
      <Layout/>
    </>
  )
}

