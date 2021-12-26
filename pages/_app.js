import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  <Head>
    <title>Weather App</title>
    <meta
      httpEquiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
