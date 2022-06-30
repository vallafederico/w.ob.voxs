import indexcss from "../styles/index.css";
import { useState } from "react";

import Nav from "~/c/Nav";
import Main from "~/c/sh/Main";
import Wrapper from "~/c/sh/Wrapper";
import Section from "~/c/sh/Section";
import Cont from "~/c/sh/Cont";

import TextBoxes from "../c/TextBox";
import Footer from "../c/Footer";
import { Cta, LaunchCta } from "../c/Cta";

import { Arrow } from "../c/sh/Svg";
import { MaverickSvg } from "../c/sh/SoulsLogo";

import { MintButton } from "~/c/sh/Button";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Index() {
  // scroll bool for preloader
  const [canScroll] = useState(true);

  // THREE - handling

  return (
    <Wrapper>
      <Nav />
      <Main canScroll={canScroll}>
        <Section className="Hero h-screen flex flex-col justify-between content-center">
          <Cont className="pt-5">
            <h1 className="text-5xl text-center font-display">
              <span className="block md:text-[10vw] text-8xl">SOULS</span>
              <span className="block">ARE COMING</span>
            </h1>
          </Cont>

          <Cont className="flex justify-center content-center">
            <MintButton />
          </Cont>
        </Section>
        <Section className="Scroll ">
          <Cont className="min-h-[200vh]">
            <TextBoxes />
          </Cont>
        </Section>
        <Section id="slider" className="Slider relative h-[300vh]">
          <Slider />
          <Cont></Cont>
        </Section>
        <Section id="info" className="Info ">
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

function Slider({ children }) {
  return (
    <div className="Slider h-[100vh] sticky top-0 flex flex-col">
      <div className="SliderMain grow"></div>
      <div className="SliderCtrl min-h-[10vw] mx-auto mb-[5vh] min-w-[50vw] p-5 rounded-md bg-light flex items-center">
        <button className="md:block hidden">
          <Arrow isBack="true" />
        </button>

        {/*  */}
        <div>
          <div className="grow flex justify-center px-9">
            <MaverickSvg className="md:min-w-[7vw] min-w-[25vw] md:m-9 m-2 py-5 " />

            <div className="m-9">
              <h2 className="font-display md:text-[4vw] text-[24px] leading-[1em] uppercase">
                <span className="block md:text-[18px] text-[12px] leading-[1em]">
                  The
                </span>
                Maverick
              </h2>

              <h3 className=" uppercase text-red text-xs mt-2 md:mt-2">
                Free Spirit who lives by their own code
              </h3>
              <button className="hidden md:block bg-black px-4 py-1 rounded-md uppercase text-white text-xs mt-5">
                More info
              </button>
            </div>
          </div>
          <div className="md:hidden flex justify-between mt-5">
            <Arrow isBack="true" />
            <button className="bg-black px-4 py-1 rounded-md uppercase text-white text-xs mt-5">
              More info
            </button>
            <Arrow />
          </div>
        </div>
        {/*  */}

        <button className="md:block hidden">
          <Arrow />
        </button>
      </div>
    </div>
  );
}
