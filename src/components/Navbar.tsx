import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="navbar">
      <ul className="flex items-start justify-center gap-3">
        {routes.map((link) => {
          return (
            <li key={link.to} className={`navitem ${pathname === link.to ? "selected" : ""}`}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
