"use server";
import { revalidatePath } from "next/cache";
import { api } from "~/trpc/server";
export async function createProduct(formData: FormData) {
  const inputProductData = {
    name: formData.get("Name") as string,
    description: formData.get("Description") as string,
    price: parseFloat(formData.get("Price") as string),
  };
  const options = {
    onSuccess: () => {
      console.log("Product has been created");
    },
  };
  await api.products.create.mutate(inputProductData);
  console.log(inputProductData);
  revalidatePath("/");
  return inputProductData;
}

export async function likeProduct(productId: string) {
  const options = {
    onSuccess: () => {
      console.log("Product has been liked");
    },
  };
  await api.like.likeProduct.mutate({ productId });
  console.log(options);
  revalidatePath("/");
}

export async function Product(
  name: string,
  description: string,
  price: number,
) {
  return {
    name,
    description,
    price,
  };
}
