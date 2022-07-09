import { Newsletter } from "./sh/Newsletter";
import { LogoGala } from "./sh/Svg";

import { IconMedium, IconInstagram, IconTwitter, IconDiscord } from "./sh/Icon";

export default function Footer({ formData }) {
  return (
    <footer className="Footer bg-black p-[5vw] text-white md:flex content-center justify-between items-center">
      <Credits />
      <Newsletter formData={formData} />
      <ul className="md:min-w-[10vw] text-xs uppercase font-display">
        <li className="py-1">
          <a
            target="_blank"
            rel="noreferrer"
            className=""
            href="https://www.instagram.com/gogalagames/"
          >
            <IconInstagram className=" fill-white inline max-w-[1em]" />
            <span className="inline">Instagram</span>
          </a>
        </li>
        <li className="py-1">
          <a
            target="_blank"
            rel="noreferrer"
            className=""
            href="https://twitter.com/TheVOXverse"
          >
            <IconTwitter className=" fill-white inline max-w-[1em]" />
            <span className="inline">Twitter</span>
          </a>
        </li>
        <li className="py-1">
          <a
            target="_blank"
            rel="noreferrer"
            className=""
            href="https://discord.com/invite/JtnCNMFnnK"
          >
            <IconDiscord className=" fill-white inline max-w-[1em]" />
            <span className="inline">Discord</span>
          </a>
        </li>
        <li className="py-1">
          <a
            target="_blank"
            rel="noreferrer"
            className=""
            href="https://gogalagames.medium.com/"
          >
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
      <LogoGala className="fill-white xl:w-[7vw] lg:w-[15vw] md:w-[20vw] w-[50vw] pb-9" />
      <div>
        <a
          href="https://collectvox.com/terms-and-conditions"
          target="_blank"
          rel="noreferrer"
        >
          Terms and Conditions
        </a>{" "}
        |{" "}
        <a
          href="https://app.gala.games/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Privacy Policy{" "}
        </a>
        <div className="py-5">
          © Gala Labs. All rights reserved.
          <span className="block text-xs font-light">
            All other logos and trademarks are property of their owners.
          </span>
        </div>
      </div>
    </div>
  );
}
