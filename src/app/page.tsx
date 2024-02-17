import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "~/server/auth";
import AddItem from "./_components/add-item";
import Navbar from "./_components/navbar";
import { api } from "~/trpc/react";
import Form from "./_components/create-form-product";
import ProductList from "./_components/productList";
export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <Navbar session={session} />
      <main className=" text-white">
        <h1 className="mt-5 text-center text-4xl font-bold">
          Welcome to your dashboard
        </h1>
        <AddItem />
      </main>
    </>
  );
}
