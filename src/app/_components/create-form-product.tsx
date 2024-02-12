"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";

export async function Form({ products }: any) {
  const createProduct = api.products.create.useMutation();

  return (
    <>
      <div className=" container mx-auto   max-w-md">
        <form className="flex flex-col text-black">
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
      ;
    </>
  );
}
