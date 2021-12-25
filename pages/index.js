import Head from "next/head";
import Weather from "../components/Weather";

export default function Home() {
  <Head>
    <title>Weather App</title>
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
  </Head>;
  return (
    <>
      <Weather />
    </>
  );
}
