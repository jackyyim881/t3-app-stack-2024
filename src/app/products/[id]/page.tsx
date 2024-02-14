// "use client";

import type { Product } from "@prisma/client";
import { usePathname, useSearchParams, useParams } from "next/navigation";
import { api } from "~/trpc/server";

type ProductProps = {
  params: {
    id: string;
  };
};

export default async function productsList({ params }: ProductProps) {
  const product = await api.products.findUniqueProduct.query({
    productId: params.id,
  });

  console.log(product);
  return (
    <div>
      <h1>Products</h1>
      {product.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
