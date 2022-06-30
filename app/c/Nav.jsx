import { NavLink, Link } from "@remix-run/react";

import { LogoVox } from "./sh/Svg";
import { MintButton } from "./sh/Button";

export default function Nav() {
  return (
    <nav className="Nav fixed text-black flex justify-between items-center w-screen px-10 pb-5 pt-10 z-10 backdrop-blur-sm">
      <NavLinks className="max-w-1/3" />

      <Link to="/" className="">
        <LogoVox />
      </Link>

      <div className="flex justify-end max-w-1/3">
        <MintButton />
      </div>
    </nav>
  );
}

function NavLinks({ className }) {
  return (
    <ul
      className={`flex-row hidden md:flex text-xs uppercase font-display ${className}`}
    >
      <li>
        <a className="px-5 py-2" href="/#slider">
          Find Your Soul
        </a>
      </li>
      <li>
        <a className="px-5 py-2" href="/#info">
          About Souls
        </a>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "hidden" : "px-5 py-2")}
          to="/about"
        >
          About Vox
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "hidden" : "px-5 py-2")}
          to="/"
        >
          Home
        </NavLink>
      </li>
    </ul>
  );
}
