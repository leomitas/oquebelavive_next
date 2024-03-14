'use client'

import Image from 'next/image'
import { useState } from 'react'
import { IProduct } from './Products'

type ProductImageProps = {
  product: IProduct
  fill?: boolean
}

export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true)
  return (
    <Image
      src={product.image}
      width={270}
      height={250}
      alt={product.name}
      className={`object-cover ${
        loading
          ? 'scale-110 blur-3xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      }`}
      onLoad={() => setLoading(false)}
    />
  )
}
