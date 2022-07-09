import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { NavLink, Link } from "@remix-run/react";

import { LogoVox } from "./sh/Svg";
import { MintButton } from "./sh/Button";

export default function Nav({ isAbout, isMint = false, isIn = true }) {
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

      <div className="flex justify-end items-center lg:w-1/3">
        {!isMint ? <MintButton /> : null}
        <MenuBtn />
      </div>
    </nav>
  );
}

function MenuBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const menuDisplay = () => {
    if (!isOpen) {
      return (
        <div className="rotate-90 relative lg:hidden">
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      );
    } else {
      return <div className="mx-1">X</div>;
    }
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="p-4 pr-0 flex relative font-display"
    >
      {menuDisplay()}
      <Menu isOpen={isOpen} />
    </div>
  );
}

function Menu({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } absolute top-0 right-0 translate-y-[10vh] w-[50vw] z-20 bg-light p-4 rounded-lg drop-shadow-lg`}
    >
      <ul className="uppercase font-display">
        <li className="my-3">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="my-3">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="my-3">
          <a
            className="py-3 my-3"
            target="_blank"
            rel="noreferrer"
            href="https://linktr.ee/thevoxverse"
          >
            Opensea
          </a>
        </li>
        <li className="my-3">
          <a
            className="py-3 my-3"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/gogalagames/"
          >
            Instagram
          </a>
        </li>
        <li className="my-3">
          <a
            className="py-3 my-3"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/TheVOXverse"
          >
            Twitter
          </a>
        </li>
        <li className="my-3">
          <a
            className="py-3 my-3"
            target="_blank"
            rel="noreferrer"
            href="https://gogalagames.medium.com/"
          >
            Medium
          </a>
        </li>
        <li className="my-3">
          <a
            className="py-3 my-3"
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/invite/JtnCNMFnnK"
          >
            Discord
          </a>
        </li>
        <li className="my-3">
          <a
            className="py-3 my-3"
            target="_blank"
            rel="noreferrer"
            href="https://linktr.ee/thevoxverse"
          >
            Collectvox.com
          </a>
        </li>
      </ul>
    </div>
  );
}

// function Hamb() {
//   return <div className="relative">|||</div>;
// }

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
