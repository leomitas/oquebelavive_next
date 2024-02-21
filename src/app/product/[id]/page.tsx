import ProductImage from '@/components/ProductImage'
import { Button } from '@/components/ui/button'
import { products } from '@/database'
import { formatPrice } from '@/lib/utils'

type ProductPageProps = {
  params: {
    id: number
  }
}

async function getProduct(id: number) {
  const product = await products.find((product) => product.id == id)
  return {
    id: product!.id,
    name: product!.name,
    description: product!.description,
    image: product!.image,
    price: product!.price,
    sold: product!.sold,
    linkForSale: product!.linkForSale,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)
  return (
    <div>
      <ProductImage product={product} />
      <div className='grid grid-cols-1 font-bold my-3'>
        <p className='text-md'>{product.name}</p>
        <p className='text-md justify-end flex'>{formatPrice(product.price)}</p>
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
    </div>
  )
}
