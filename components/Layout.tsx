import React from 'react';
import Footer from './Footer';
import Head from 'next/head';
import { LayoutProps } from '@typescript/types';
import { ToastContainer } from 'react-toastify';

const Layout = ({
  children,
  title = 'This is the default title',
  hide = false
}: LayoutProps) => {
  return (
    <div className="flex-1 w-full h-full md:pb-8 select-none">
      <Head>
        <title>{title}</title>
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
        theme="light"
      />


      <div className="md:mt-24 mt-32 h-full">{children}</div>

      {/* <Footer hide={hide} /> */}
    </div>
  );
};

export default Layout;
