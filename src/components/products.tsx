'use client'
import { api } from '@/services/api'
import { useEffect, useState } from 'react'

interface IProduct {
  id: number
  name: string
  description: string
  image: string
  price: number
  sold: number
  linkForSale: string
}

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('product')
        setProducts(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Product</h1>
      <section>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.name}</li>
          })}
        </ul>
      </section>
    </div>
  )
}
