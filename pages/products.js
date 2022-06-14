import Head from "next/head";
import {Box} from "@mui/material";
import {Store} from "../component/store/store";

export default function Products() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="start shoping now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Store />
    </>
  );
}
