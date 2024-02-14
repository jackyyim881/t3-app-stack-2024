import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";
import { api } from "~/trpc/react";
import { Product } from "~/app/_actions/actions";
import { createProduct } from "~/app/_actions/actions";
import SubmitButton from "./submit-button";

export default function AddItem() {
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
        <SubmitButton />
      </form>
    </div>
  );
}
