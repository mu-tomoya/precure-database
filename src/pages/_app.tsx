import "@/styles/global.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <ApolloProvider client={client}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>;
}
