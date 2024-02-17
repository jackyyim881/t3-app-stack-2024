// "use client";

import type { Product } from "@prisma/client";
import { usePathname, useSearchParams, useParams } from "next/navigation";
import { api } from "~/trpc/server";
import { likeProduct } from "~/app/_actions/actions";

type ProductProps = {
  params: {
    id: string;
  };
};

export default async function productsList({ params }: ProductProps) {
  const product = await api.products.findUniqueProduct.query({
    productId: params.id,
  });
  const handleSubmit = await likeProduct(params.id);
  console.log(product);
  return (
    <div className=" container mx-auto">
      <h1 className=" mt-10  text-center text-4xl font-bold text-zinc-200">
        Products
      </h1>

      <div className="grid gap-4 p-4 md:grid-cols-2">
        <div className="space-y-4 overflow-auto rounded-lg bg-gray-900 p-4 text-white">
          {product.map((product: Product) => (
            <form
              key={product.id}
              className="rounded-lg border border-gray-800 p-4"
            >
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-400">{product.description}</p>
              <p className="text-lg font-semibold">{product.price}</p>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-green-500 p-2 text-center font-bold text-white"
              >
                Buy
              </button>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-blue-500 p-2 text-center font-bold text-white"
              >
                Like
              </button>
            </form>
          ))}
        </div>
        <div className="rounded-lg bg-gray-900 p-4 text-white">
          <h2 className="relative mb-4 text-right  text-2xl    font-bold">
            Your Cart
          </h2>
          <button
            type="submit"
            className="    relative  w-full rounded-md bg-blue-500 p-4 text-center font-bold text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
