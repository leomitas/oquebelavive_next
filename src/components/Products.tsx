'use client'
import ProductImage from './ProductImage'
import { formatPrice } from '@/lib/utils'
import { Button } from './ui/button'
import { products } from '@/database'
import Link from 'next/link'

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
              className='flex flex-col shadow-2xl h-100 p-4 rounded border-black border-0 bg-lavender-rose-1'
              key={product.id}
            >
              <Link href={`/product/${product.id}`}>
                <div className='max-h-full flex-1 flex justify-center'>
                  <ProductImage product={product} />
                </div>
                <div className='grid grid-cols-1 font-bold my-3'>
                  <p className='text-md'>{product.name}</p>
                  <p className='text-md justify-end flex'>
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
              {product.price !== 0 ? (
                <Button className='p-0 bg-lavender-rose-0'>
                  <a
                    href={product.linkForSale}
                    className='w-full h-full items-center flex justify-center font-bold text-black'
                  >
                    Comprar
                  </a>
                </Button>
              ) : (
                <Button className='p-0 bg-lavender-rose-0'>
                  <a
                    href={product.linkForSale}
                    className='w-full h-full items-center flex justify-center text-black font-bold'
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
