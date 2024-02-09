'use client'
import { useEffect, useState } from 'react'
import ProductImage from './ProductImage'
import { formatPrice } from '@/lib/utils'
import { Button } from './ui/button'
import { api } from '@/services/api'

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
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 xl:gap-6'>
        {products.map((product) => {
          return (
            <div
              className='flex flex-col shadow-lg h-96 bg-slate-700 text-gray-300 p-4 rounded'
              key={product.id}
            >
              <div className='relative max-h-72 flex-1'>
                <ProductImage product={product} fill />
              </div>
              <div className='grid grid-cols-1 font-bold my-3'>
                <p className='text-md'>{product.name}</p>
                <p className='text-md text-teal-300 justify-end flex'>
                  {formatPrice(product.price)}
                </p>
              </div>
              {product.price !== 0 ? (
                <Button className='p-0'>
                  <a
                    href={product.linkForSale}
                    className='w-full h-full items-center flex justify-center'
                  >
                    Comprar
                  </a>
                </Button>
              ) : (
                <Button className='p-0'>
                  <a
                    href={product.linkForSale}
                    className='w-full h-full items-center flex justify-center'
                  >
                    Baixar
                  </a>
                </Button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
