import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

import tailwindcss from "./styles/tailwind.css";
import globalcss from "./styles/global.css";

import og_img from "~/src/img/Vox-Souls-Website.png";

export const meta = () => ({
  charset: "utf-8",
  title: "Vox Souls",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: tailwindcss },
  { rel: "stylesheet", href: globalcss },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta property="og:title" content="Vox Souls - Mint Yours Now" />
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
