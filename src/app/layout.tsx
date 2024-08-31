import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";


import { ToastContainer } from "react-toastify";
import GlobalLoader from "@/components/GlobalLoader";
import Script from "next/script";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Event Management System",
  description: "Test Event Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <ToastContainer
          className={"global-toaster"}
          stacked
          hideProgressBar
          newestOnTop
          autoClose={1500}
          limit={3}
        />
         <ReduxProvider>
          <GlobalLoader />
          {children}
         </ReduxProvider>
      </body>
    </html>
  );
}
