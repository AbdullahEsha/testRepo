import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
