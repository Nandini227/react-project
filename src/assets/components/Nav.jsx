import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-center  gap-32 text-2xl items-center bg-black text-white h-20">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/Certificates">Certificates</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
