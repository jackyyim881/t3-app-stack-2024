/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { api } from "~/trpc/server";

export default async function ProductList() {
  const products = await api.products.list.query();
  return (
    <div>
      <h1>Product</h1>
      {products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
