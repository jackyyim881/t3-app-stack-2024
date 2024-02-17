import Navbar from "~/app/_components/navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar session={undefined} />
      {children}
    </section>
  );
}
