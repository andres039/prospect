import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Andr&eacute;s Beltr&aacute;n</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
