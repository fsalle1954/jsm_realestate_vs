import type Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
//
//
import Layout from "../components/Layout";

// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
