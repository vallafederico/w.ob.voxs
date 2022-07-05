import indexcss from "../styles/index.css";
import { useState } from "react";

import Nav from "~/c/Nav.jsx";
import Section from "~/c/sh/Section.jsx";
import Main from "~/c/sh/Main";
import Wrapper from "~/c/sh/Wrapper";
import Cont from "~/c/sh/Cont";
import Footer from "../c/Footer";

import { LaunchCta } from "../c/Cta";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Index() {
  return (
    <Wrapper>
      <Nav isAbout="true" />
      <Main canScroll={true}>
        <Section className=" pt-[20vh]">
          <Cont>
            <Tabs />
          </Cont>
        </Section>
        <Section>
          <Cont>
            <LaunchCta />
          </Cont>
        </Section>
        <Footer />
      </Main>
    </Wrapper>
  );
}

function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <div className="md:flex">
        <button
          className={`w-1/2 text-red uppercase font-display ${
            !currentTab ? "" : "opacity-5"
          }`}
          onClick={() => setCurrentTab(0)}
        >
          Learn About{" "}
          <span
            className={`block text-black text-3xl md:text-8xl ${
              !currentTab ? "border-b-2 border-red" : ""
            }`}
          >
            VOX
          </span>
        </button>
        <button
          className={`w-1/2 text-red uppercase font-display ${
            currentTab ? "" : "opacity-5"
          }`}
          onClick={() => setCurrentTab(1)}
        >
          Learn About{" "}
          <span
            className={`block text-black text-3xl md:text-8xl ${
              currentTab ? "border-b-2 border-red" : ""
            }`}
          >
            SOULS
          </span>
        </button>
      </div>
      {/* Content */}
      <div
        className={`${
          currentTab ? "md:hidden hidden" : ""
        } md:flex gap-8 md:pt-[10vh] py-[10vh]`}
      >
        <TextBlock title="Destiny and Free Will">{filler} </TextBlock>
        <TextBlock title="Play to your strengths.">{filler} </TextBlock>
        <TextBlock title="Boost your DeFi">{filler} </TextBlock>
      </div>
      <div
        className={`${
          !currentTab ? "md:hidden hidden" : ""
        } md:flex gap-8 md:pt-[10vh] py-[10vh]`}
      >
        <TextBlock title="Our Metaverse">{filler} </TextBlock>
        <TextBlock title="Do VOX have utility?">{filler} </TextBlock>
        <TextBlock title="What Is a VOX?">{filler} </TextBlock>
      </div>
      {/* ENd - Content */}
    </div>
  );
}

function TextBlock({ title = "Title", children }) {
  return (
    <div className="py-8">
      <h2 className="font-display text-4xl leading-[1.2em] pb-4">{title}</h2>
      <p className="">{children}</p>
    </div>
  );
}

const filler =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
