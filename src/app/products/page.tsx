import { api } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";
import ProductImage from "./productPicture";
type ProductForm = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }[];
};
export default async function productPage() {
  const products = await api.products.list.query();

  return (
    <div className="container mx-auto">
      <h1 className=" mt-5 text-center text-4xl font-bold">Product</h1>
      <div className=" mt-10  grid   grid-cols-4 gap-4">
        {products.map((product: any, index: number) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div
              className={`box  grid rounded-md  bg-black p-4 text-white shadow-md ${index % 1 === 0 ? "mb-10" : "mb-5"}`}
            >
              {product.image ? (
                <Image
                  width={200}
                  height={200}
                  src={product.image}
                  alt="Product image"
                />
              ) : (
                <Image
                  width={200}
                  height={200}
                  className="rounded-lg bg-white"
                  src="/no-image.svg"
                  alt="Product image"
                />
              )}
              <div className="p-4">
                <h2>Name:&nbsp;{product.name}</h2>
                <p>Description:&nbsp;{product.description}</p>
                <p>Price:&nbsp;{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
