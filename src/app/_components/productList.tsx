import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/server";

export default async function ProductList() {
  const products = await api.products.list.query();
  return (
    <div className="">
      <h1>Product</h1>
      <div className="max-w-md">
        {products.map((product: any, index: number) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div
              className={`grid grid-cols-2 bg-black p-4 ${index % 1 === 0 ? "mb-10" : "mb-5"}`}
            >
              <h2>Name:&nbsp;{product.name}</h2>
              <p>Description:&nbsp;{product.description}</p>
              <p>Price:&nbsp;{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
