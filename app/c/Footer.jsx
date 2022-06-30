import { Newsletter } from "./sh/Newsletter";
import { LogoGala } from "./sh/Svg";

export default function Footer() {
  return (
    <footer className="Footer bg-black p-[5vw] text-white md:flex content-center justify-between items-center">
      <Credits />
      <Newsletter />
      <ul className="md:min-w-[10vw] text-xs uppercase font-display">
        <h4 className="border-b-2 border-b-red text-sm mb-5">Social Vox</h4>
        <li className="py-1">
          <a className="" href="/">
            <div className="inline mr-5">IMG</div>
            <span className="">Instagram</span>
          </a>
        </li>
        <li className="py-1">
          <a className="" href="/">
            <div className="inline mr-5">IMG</div>
            <span className="">Twitter</span>
          </a>
        </li>
        <li className="py-1">
          <a className="" href="/">
            <div className="inline mr-5">IMG</div>
            <span className="">Discord</span>
          </a>
        </li>
        <li className="py-1">
          <a className="" href="/">
            <div className="inline mr-5">IMG</div>
            <span className="">Medium</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

function Credits() {
  return (
    <div className="Credits border2 text-xs">
      <LogoGala className="fill-white md:w-[15vw] w-1/2 pb-9" />
      <div className="py-5">© Gala Labs. All rights reserved.</div>
      <a href="/"> Terms and Conditions </a> | <a href="/"> Privacy Policy </a>
    </div>
  );
}

/**
 * Footer Links
 */

const FOOTERLINKS = {
  title: "Links",
  links: [
    { href: "/", text: "What" },
    { href: "/", text: "Voxverse" },
    { href: "/", text: "Purchase" },
    { href: "/", text: "Exchange" },
  ],
};

const SOCIALLINKS = {
  title: "Social Souls",
  links: [
    { href: "/", text: "Instagram" },
    { href: "/", text: "Twitter" },
    { href: "/", text: "Discord" },
    { href: "/", text: "Medium" },
  ],
};
