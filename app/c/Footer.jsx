import { Newsletter } from "./sh/Newsletter";
import { LogoGala } from "./sh/Svg";

import { IconMedium, IconInstagram, IconTwitter, IconDiscord } from "./sh/Icon";

export default function Footer() {
  return (
    <footer className="Footer bg-black p-[5vw] text-white md:flex content-center justify-between items-center">
      <Credits />
      <Newsletter />
      <ul className="md:min-w-[10vw] text-xs uppercase font-display">
        <h4 className="border-b-2 border-b-red text-sm mb-5">Social Vox</h4>
        <li className="py-1">
          <a className="" href="/">
            <IconInstagram className=" fill-white inline max-w-[1em]" />
            <span className="inline">Instagram</span>
          </a>
        </li>
        <li className="py-1">
          <a className="" href="/">
            <IconTwitter className=" fill-white inline max-w-[1em]" />
            <span className="inline">Twitter</span>
          </a>
        </li>
        <li className="py-1">
          <a className="" href="/">
            <IconDiscord className=" fill-white inline max-w-[1em]" />
            <span className="inline">Discord</span>
          </a>
        </li>
        <li className="py-1">
          <a className="" href="/">
            <IconMedium className=" fill-white  inline" />
            <span className="inline">Medium</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

function Credits() {
  return (
    <div className="Credits border2 text-xs ">
      <LogoGala className="fill-white md:w-[15vw] w-[50vw] pb-9" />
      <div>
        <div className="py-5">© Gala Labs. All rights reserved.</div>
        <a href="/"> Terms and Conditions </a> |{" "}
        <a href="/"> Privacy Policy </a>
      </div>
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
