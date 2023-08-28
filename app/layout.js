"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ModalPopup from "@/components/modal/ModalPopup";
import { usePathname } from "next/navigation";
import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  const router = usePathname();
  return (
    <html lang="en">
      <title>Nazara</title>
      <body>
        <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
          {router === "/payment" ? (
            children
          ) : (
            <>
              <Navbar />
              {children}
              {/* <ModalPopup /> */}
              <Footer />
            </>
          )}
        </Provider>
      </body>
    </html>
  );
}
