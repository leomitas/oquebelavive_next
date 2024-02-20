import ProductImage from "@/components/ProductImage";
import { products } from "@/database";

type ProductPageProps = {
  params: {
    id: number;
  };
};

async function getProduct(id: number) {
  const product = await products.filter((product) => product.id == id);
  console.log(product);
  return {
    id: product[0].id,
    name: product[0].name,
    description: product[0].description,
    image: product[0].image,
    price: product[0].price,
    sold: product[0].sold,
    linkForSale: product[0].linkForSale,
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  console.log(id);
  await getProduct(id);
  return (
    <div>
      <h1>oi</h1>
    </div>
    // <div>
    //   <ProductImage product={product} />
    //   <div className="grid grid-cols-1 font-bold my-3">
    //             <p className="text-md">{product.name}</p>
    //             <p className="text-md justify-end flex">
    //               {formatPrice(product.price)}
    //             </p>
    //           </div>
    //           {product.price !== 0 ? (
    //             <Button className="p-0 bg-lavender-rose-100">
    //               <a
    //                 href={product.linkForSale}
    //                 className="w-full h-full items-center flex justify-center text-lavender-rose-800 font-bold"
    //               >
    //                 Comprar
    //               </a>
    //             </Button>
    //           ) : (
    //             <Button className="p-0 bg-lavender-rose-100">
    //               <a
    //                 href={product.linkForSale}
    //                 className="w-full h-full items-center flex justify-center text-lavender-rose-800 font-bold"
    //               >
    //                 Baixar
    //               </a>
    //             </Button>
    //           )}
    // </div>
  );
}
