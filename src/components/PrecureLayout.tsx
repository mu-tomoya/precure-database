import { ReactNode } from "react";
import Layout from "./Layout";
import { PrecureProvider } from "./hooks/PrecureProvider";

export default function PrecureLayout({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <PrecureProvider>{children}</PrecureProvider>
    </Layout>
  );
}
