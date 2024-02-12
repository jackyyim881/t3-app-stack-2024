import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";
import { api } from "~/trpc/react";

export default function AddItem() {
  const product = api.products.create.useMutation();
  async function createProduct(formData: FormData) {
    "use server";
    const formTableData = {
      name: formData.get("Name") as string,
      description: formData.get("Description") as string,
      price: parseFloat(formData.get("Price") as string),
    };
    console.log(formTableData);
  }

  return (
    <div className=" container mx-auto   max-w-md">
      <form className="flex flex-col text-black" action={createProduct}>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          required
          className="m-4 p-4"
        />
        <input
          type="text"
          name="Description"
          placeholder="Description"
          required
          className="m-4 p-4"
        />
        <input
          type="number"
          name="Price"
          step="0.01"
          placeholder="Price"
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
