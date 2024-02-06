'use client'
import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import ProductImage from './ProductImage'

export interface IProduct {
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
        const data = response.data.products as [
          number,
          string,
          string,
          string,
          number,
          number,
          string
        ][]
        const convertProducts: IProduct[] = data.map((tupla) => {
          return {
            id: tupla[0],
            name: tupla[1],
            description: tupla[2],
            image: tupla[3],
            price: tupla[4],
            sold: tupla[5],
            linkForSale: tupla[6],
          }
        })
        setProducts(convertProducts)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <div className='flex flex-col shadow-lg h-96 bg-slate-800 text-gray-300 p-4'>
            <div className='relative max-h-72 flex-1'>
              <ProductImage product={product} fill />
            </div>
          </div>
        )
      })}
    </>
  )
}
