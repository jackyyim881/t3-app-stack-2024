"use server";
export default async function createProduct(formData: FormData) {
  const inputProductData = {
    name: formData.get("Name") as string,
    description: formData.get("Description") as string,
    price: parseFloat(formData.get("Price") as string),
  };
  console.log(inputProductData);
}
