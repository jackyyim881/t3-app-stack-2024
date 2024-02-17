/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { api } from "~/trpc/server";

export default function ProductImage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await api.products.list.query();
      setProducts(result as any);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>
          {product.image ? (
            <Image src="image.jpg" alt="My Image" width={500} height={500} />
          ) : (
            <div>Image not available yet</div>
          )}
        </div>
      ))}
    </div>
  );
}
