import Nav from "@/components/Nav";
import NavLink from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">My Orders</NavLink>
      </Nav>
      <main className="container my-6 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}