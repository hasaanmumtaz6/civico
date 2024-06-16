import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, title }: any) => {
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>{title}</title>
      </Head>
      Header
      <div>{children}</div>
      Footer
    </main>
  );
};

export default Layout;
