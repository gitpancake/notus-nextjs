import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jay Glittersby - Christmas Ball</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
