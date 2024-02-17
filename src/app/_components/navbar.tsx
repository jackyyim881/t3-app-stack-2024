import Link from "next/link";

export default function Navbar({ session }: { session: unknown }) {
  return (
    <nav className="bg-gray-950 p-10">
      <div className="container mx-auto text-white">
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/about" className="mr-4">
          About
        </Link>
        <Link href="/contact" className="mr-4">
          Contact
        </Link>
        <Link href="/products" className=" mr-4 font-bold">
          Products
        </Link>
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="font-bold"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </nav>
  );
}
