import type { NextPage } from "next";
import Head from "next/head";

const HelloPage: NextPage = () => {
  return (
    <div className="mx-auto my-auto flex items-center justify-center h-screen flex-col space-y-5">
      <Head>
        <title>Hello Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-poppins text-7xl text-green-500 font-semibold">
        Hello Page
      </h1>
    </div>
  );
};

export default HelloPage;
