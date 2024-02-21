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
  return fill ? (
    <Image
      src={product.image}
      fill
      alt={product.name}
      className={`object-cover ${
        loading
          ? 'scale-110 blur-3xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      }`}
      onLoad={() => setLoading(false)}
      sizes='100%'
      priority={true}
    />
  ) : (
    <Image
      src={product.image}
      width={360}
      height={400}
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
