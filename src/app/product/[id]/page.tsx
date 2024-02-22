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

  const sentences = product.description.split('. ')

  return (
    <main className='max-w-7xl mx-auto xl:px-0 flex flex-col lg:flex-row gap-6 lg:p-16 items-center lg:justify-between'>
      <div className='pt-8 lg:pb-0 lg:px-20 lg:w-1/2'>
        <ProductImage product={product} />
      </div>
      <div className='grid grid-cols-1 font-bold my-3 px-8 lg:px-20 lg:w-1/2 pb-8 lg:pb-0'>
        <h2 className='text-md font-bold pb-4'>{product.name}</h2>
        <div>
          {sentences.map((sentence, index) => (
            <p key={index} className='text-sm'>
              {sentence}
            </p>
          ))}
        </div>
        <p className='text-md justify-end flex pb-4'>
          {formatPrice(product.price)}
        </p>
        {product.price !== 0 ? (
          <Button className='p-0 bg-lavender-rose-200'>
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
    </main>
  )
}
