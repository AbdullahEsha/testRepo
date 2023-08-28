import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="bg-primary-color text-base-100 relative">
      {/* pc and desktop view  */}
      <div id="navBar">
        <DesktopNavbar />
      </div>

      {/* mobile and tab view  */}
      <div className="relative z-50">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
