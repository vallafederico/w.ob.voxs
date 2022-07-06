import indexcss from "../styles/index.css";
import { useState } from "react";

import Nav from "~/c/Nav.jsx";
import Section from "~/c/sh/Section.jsx";
import Main from "~/c/sh/Main";
import Wrapper from "~/c/sh/Wrapper";
import Cont from "~/c/sh/Cont";
import Footer from "../c/Footer";
import { LaunchCta, AdditionalCta } from "../c/Cta";
import { MintButton } from "../c/sh/Button";

import img_boost from "~/src/img/boost.jpg";
import img_destiny from "~/src/img/destiny.jpg";
import img_metav from "~/src/img/metav.jpg";
import img_playto from "~/src/img/playto.jpg";
import img_utility from "~/src/img/utility.jpg";
import img_whatis from "~/src/img/whatis.jpg";

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
          <AdditionalCta />
        </Section>

        <Section>
          <Cont>
            <LaunchCta>
              <MintButton />
            </LaunchCta>
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
      <div className="lg:flex">
        <button
          className={`w-1/2 text-red uppercase font-display ${
            !currentTab ? "" : "opacity-50"
          }`}
          onClick={() => setCurrentTab(0)}
        >
          <p className="block">Learn About </p>

          <span
            className={`text-black text-3xl md:text-8xl inline ${
              !currentTab ? "border-b-[.2em] border-red" : ""
            }`}
          >
            VOX
          </span>
        </button>
        <button
          className={`w-1/2 text-red uppercase font-display ${
            currentTab ? "" : "opacity-50"
          }`}
          onClick={() => setCurrentTab(1)}
        >
          <p className="block">Learn About</p>
          <span
            className={` text-black text-3xl md:text-8xl inline ${
              currentTab ? "border-b-[.2em] border-red" : ""
            }`}
          >
            SOULS
          </span>
        </button>
      </div>
      {/* Content */}
      <div
        className={`${
          currentTab ? "hidden lg:hidden" : ""
        } lg:flex gap-16 lg:pt-[10vh] py-[10vh]`}
      >
        <TextBlock title="Our Metaverse" img={img_metav}>
          Each VOX can claim a single Soul. Your specific Soul is determined by
          the precise moment at which your VOX was first minted from its box,
          similar to a zodiac sign. Still, Souls do not permanently attach to
          VOX. Instead, they are yours to transfer or sell depending on who you
          want your VOX to be.
        </TextBlock>
        <TextBlock title="Do VOX have utility?" img={img_utility}>
          Yes, VOX are designed to have various utilities. That means they will
          serve a purpose beyond just being a cute avatar that you can own and
          animate. VOX will be able to lock up GALA and eventually earn VOXcoin
          as rewards for play. There are additional utilities as well, such as
          play-to-earn rewards in <i>Town Star</i> and in-game benefits in
          <i> Mirandus.</i>
        </TextBlock>
        <TextBlock title="What Is a VOX?" img={img_whatis}>
          A VOX is a unique avatar with traits. VOX are collectible ERC-721
          NFTs. Each VOX is programmatically generated and provably unique,
          meaning that no two VOX will look the same.
        </TextBlock>
      </div>
      <div
        className={`${
          !currentTab ? "hidden lg:hidden" : ""
        } lg:flex gap-16 lg:pt-[10vh] py-[10vh]`}
      >
        <TextBlock title="Destiny and Free Will" img={img_destiny}>
          Each VOX can claim a single Soul. Your specific Soul is determined by
          the precise moment at which your VOX was first minted from its box,
          similar to a zodiac sign. Still, Souls do not permanently attach to
          VOX. Instead, they are yours to transfer or sell depending on who you
          want your VOX to be.{" "}
        </TextBlock>
        <TextBlock title="Play to your strengths." img={img_playto}>
          Having a Soul allows you to level up certain traits faster in-game:
          Smarts, Wit, Might, Endurance, Agility, and Swagger. Play to your
          strengths and shore up your weaknesses. Use your Wit to outsmart a
          cunning dragon, or double down on Might and Swagger to intimidate an
          enemy. It’s all about choosing your style of play; after all, you
          wouldn’t bring a pool noodle to a sword fight.
        </TextBlock>
        <TextBlock title="Boost your DeFi" img={img_boost}>
          We will be introducing a new version of DeFi for VOX, not seen
          anywhere else. Rather than passive earning, users who own a VOX will
          be given access to an ecosystem that provides rewards based on active
          engagement. If a VOX has a Soul, they will earn even more rewards. The
          requirements for participating will be determined separately for each
          product available to you. You can still play the games and earn with a
          VOX that doesn’t have a Soul… but where’s the fun in that?
        </TextBlock>
      </div>
      {/* ENd - Content */}
    </div>
  );
}

function TextBlock({ title = "Title", children, img }) {
  return (
    <div className="p-8 lg:w-1/3 my-8 bg-light flex flex-col justify-between rounded-lg xl:max-w-[25vw]">
      <div>
        <h2 className="font-display text-5xl leading-[1.2em]">{title}</h2>
        <img src={img} alt="" className="py-6" />
      </div>
      <p className="">{children}</p>
    </div>
  );
}
