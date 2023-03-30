import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[1000px]">{children}</main>
      <Footer />
    </>
  );
}
