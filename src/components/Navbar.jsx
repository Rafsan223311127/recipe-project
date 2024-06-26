import React, { useState } from "react";
import Sidebar from "./Sidebar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog
    }
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          Cuisine Canvas
        </a>
        <div className="nav-links">
          {links.map(link => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar links={links} close={closeSidebar} />}
    </>
  );
}

export default Navbar;
