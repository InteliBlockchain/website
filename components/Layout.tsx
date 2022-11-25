import React, { useEffect } from "react";
import Footer from "./Footer";
import Head from "next/head";
import { LayoutProps } from "@typescript/types";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, title, hide = false }: LayoutProps) => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex-1 w-full h-full md:pb-8 select-none">
      <Head>
        <title>
          {title ? `${title} - Inteli Blockchain` : "Inteli Blockchain"}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={localStorage.theme === "dark" ? "dark" : "light"}
      />
      <div className="md:mt-24 mt-32 bg-[#e2e2e2] dark:bg-[#2e2e2e]">{children}</div>

      {/* <Footer hide={hide} /> */}
    </div>
  );
};

export default Layout;
