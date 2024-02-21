'use client'
import ProductImage from './ProductImage'
import { formatPrice } from '@/lib/utils'
import { Button } from './ui/button'
import { products } from '@/database'

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
  return (
    <div
      className='max-w-7xl mx-auto xl:px-0 flex flex-col gap-6 p-16'
      id='products'
    >
      <h2 className='font-bold text-3xl'>Produtos</h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 xl:gap-6'>
        {products.map((product) => {
          return (
            <li
              className='flex flex-col shadow-2xl h-100 bg-lavender-rose-800 text-lavender-rose-50 p-4 rounded'
              key={product.id}
            >
              <div className='max-h-full flex-1 flex justify-center'>
                <ProductImage product={product} />
              </div>
              <div className='grid grid-cols-1 font-bold my-3'>
                <p className='text-md'>{product.name}</p>
                <p className='text-md justify-end flex'>
                  {formatPrice(product.price)}
                </p>
              </div>
              {product.price !== 0 ? (
                <Button className='p-0 bg-lavender-rose-100'>
                  <a
                    href={product.linkForSale}
                    className='w-full h-full items-center flex justify-center text-lavender-rose-800 font-bold'
                  >
                    Comprar
                  </a>
                </Button>
              ) : (
                <Button className='p-0 bg-lavender-rose-100'>
                  <a
                    href={product.linkForSale}
                    className='w-full h-full items-center flex justify-center text-lavender-rose-800 font-bold'
                  >
                    Baixar
                  </a>
                </Button>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
