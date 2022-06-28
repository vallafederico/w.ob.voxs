import indexcss from "../styles/index.css";

import Nav from "~/c/Nav.jsx";
import Section from "~/c/sh/Section.jsx";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Index() {
  return (
    <div className="pw min-h-screen">
      <Nav />
      <main className="w min-h-screen">
        <Section className="Hero h-screen"></Section>
        <Section className="About "></Section>
      </main>
    </div>
  );
}
