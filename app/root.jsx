import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import tailwindcss from "./styles/tailwind.css";
import globalcss from "./styles/global.css";
import { useEffect } from "react";
import { startMoralis } from "./web3.helpers";

import og_img from "~/src/img/Vox-Souls-Website.png";

export const meta = () => ({
  charset: "utf-8",
  title: "Avatars that DeFi, now with real Souls | VOX",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: tailwindcss },
  { rel: "stylesheet", href: globalcss },
];

export default function App() {
  useEffect(() => {
    startMoralis();
  }, []);
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta
          property="og:title"
          content="Avatars that DeFi, now with real Souls | VOX"
        />
        <meta name="description" content={metadesc}></meta>
        <meta property="og:image" content={og_img} />
        <Links />
      </head>
      <body className="bg-white">
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const metadesc = `The VOX collection of unique and generative NFT "Avatars that DeFi" are even more unique then ever. A single soul may be minted for each VOX in existence for series 1, 2 or 3. What makes your VOX tick? Find out by uniting it with its Soul.`;
