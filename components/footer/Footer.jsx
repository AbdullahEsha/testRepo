import React from "react";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import Subscribe from "../Subscribe";
import ScrollTopButton from "../ScrollToTop";

const Footer = () => {
  return (
    <>
      <ScrollTopButton />
      <div className="bg-secondary-color">
        <Subscribe />
      </div>
      <footer className="py-10 bg-primary-color">
        {/* for mobile & tab*/}
        <MobileFooter />

        {/* for laptop & desktop */}
        <DesktopFooter />
      </footer>
    </>
  );
};

export default Footer;
