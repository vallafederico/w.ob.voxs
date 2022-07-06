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
          <p className="block">Learn About </p>

          <span
            className={`text-black text-3xl md:text-8xl inline ${
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
          <p className="block">Learn About</p>
          <span
            className={` text-black text-3xl md:text-8xl inline ${
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
        <TextBlock title="Destiny and Free Will">
          Each VOX can claim a single Soul. Your specific Soul is determined by
          the precise moment at which your VOX was first minted from its box,
          similar to a zodiac sign. Still, Souls do not permanently attach to
          VOX. Instead, they are yours to transfer or sell depending on who you
          want your VOX to be.{" "}
        </TextBlock>
        <TextBlock title="Play to your strengths.">
          Having a Soul allows you to level up certain traits faster in-game:
          Smarts, Wit, Might, Endurance, Agility, and Swagger. Play to your
          strengths and shore up your weaknesses. Use your Wit to outsmart a
          cunning dragon, or double down on Might and Swagger to intimidate an
          enemy. It’s all about choosing your style of play; after all, you
          wouldn’t bring a pool noodle to a sword fight.
        </TextBlock>
        <TextBlock title="Boost your DeFi">
          We will be introducing a new version of DeFi for VOX, not seen
          anywhere else. Rather than passive earning, users who own a VOX will
          be given access to an ecosystem that provides rewards based on active
          engagement. If a VOX has a Soul, they will earn even more rewards. The
          requirements for participating will be determined separately for each
          product available to you. You can still play the games and earn with a
          VOX that doesn’t have a Soul… but where’s the fun in that?{" "}
        </TextBlock>
      </div>
      <div
        className={`${
          !currentTab ? "md:hidden hidden" : ""
        } md:flex gap-8 md:pt-[10vh] py-[10vh]`}
      >
        <TextBlock title="Our Metaverse">
          Each VOX can claim a single Soul. Your specific Soul is determined by
          the precise moment at which your VOX was first minted from its box,
          similar to a zodiac sign. Still, Souls do not permanently attach to
          VOX. Instead, they are yours to transfer or sell depending on who you
          want your VOX to be.
        </TextBlock>
        <TextBlock title="Do VOX have utility?">
          Yes, VOX are designed to have various utilities. That means they will
          serve a purpose beyond just being a cute avatar that you can own and
          animate. VOX will be able to lock up GALA and eventually earn VOXcoin
          as rewards for play. There are additional utilities as well, such as
          play-to-earn rewards in Town Star and in-game benefits in Mirandus.
        </TextBlock>
        <TextBlock title="What Is a VOX?">
          A VOX is a unique avatar with traits. VOX are collectible ERC-721
          NFTs. Each VOX is programmatically generated and provably unique,
          meaning that no two VOX will look the same.
        </TextBlock>
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
