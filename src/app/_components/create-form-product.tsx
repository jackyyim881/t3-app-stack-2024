import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/server";

export default function Form() {
  async function createProduct(formData: FormData) {
    "use server";
    const formTableData = {
      name: formData.get("Name") as string,
      description: formData.get("Description") as string,
      price: parseFloat(formData.get("Price") as string),
    };
    if (!name) {
      return {
        name,
        errors: {
          name: "Name is required",
        },
      };
    }
    console.log(formTableData);
    await api.products.create.mutate(formTableData);
  }

  const options = {
    onSuccess: () => {
      console.log("Product has been created");
    },
  };
  // const serverProduct = api.products.create.mutate(createProduct, options);
  return (
    <div className=" container mx-auto   max-w-md">
      <form className="flex flex-col text-black" action={createProduct}>
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          className="m-4 p-4"
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          required
          className="m-4 p-4"
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="price"
          required
          className="m-4 p-4"
        />
        <button
          type="submit"
          className="  border-  mt-10  rounded-md bg-black p-4 font-bold  text-white	"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
