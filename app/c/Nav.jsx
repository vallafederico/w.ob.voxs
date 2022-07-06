import gsap from "gsap";
import { useRef, useEffect } from "react";
import { NavLink, Link } from "@remix-run/react";

import { LogoVox } from "./sh/Svg";
import { MintButton } from "./sh/Button";

export default function Nav({ isAbout, isIn = true }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (!isIn) gsap.set(navRef.current, { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    if (isIn) {
      gsap.to(navRef.current, {
        autoAlpha: 1,
        duration: 1,
        delay: 7,
      });
    }
  }, [isIn]);

  return (
    <nav
      ref={navRef}
      className="Nav fixed text-black flex justify-between items-center w-screen px-10 pb-5 pt-10 z-[99] backdrop-blur-sm"
    >
      <NavLinks className="lg:w-1/3" isAbout={isAbout} />

      <Link to="/" className="lg:w-1/3 w-1/3 ">
        <LogoVox className="lg:mx-auto" />
      </Link>

      <div className="flex justify-end lg:w-1/3">
        <MintButton />
      </div>
    </nav>
  );
}

function NavLinks({ className, isAbout = false }) {
  return (
    <ul
      className={`flex-row hidden lg:flex text-[.9rem] uppercase font-display ${className}`}
    >
      <li className={`${isAbout ? "hidden" : ""}`}>
        <a className="px-5 py-2" href="/#slider">
          Find Your Soul
        </a>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "hidden" : "px-5 py-2")}
          to="/about"
        >
          About
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
