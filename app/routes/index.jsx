import indexcss from "../styles/index.css";
import { useState } from "react";

import Nav from "~/c/Nav";
import Main from "~/c/sh/Main";
import Wrapper from "~/c/sh/Wrapper";
import Section from "~/c/sh/Section";
import Cont from "~/c/sh/Cont";
import Slider from "~/c/Slider";

import TextBoxes from "../c/TextBox";
import Footer from "../c/Footer";
import { Cta, LaunchCta } from "../c/Cta";

import { SoundIcon } from "../c/sh/Svg";

import { MintButton } from "~/c/sh/Button";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Index() {
  // scroll bool for preloader
  const [canScroll] = useState(true);

  // THREE - handling

  return (
    <Wrapper>
      <Nav />
      {/*  */}
      <div className="UiCtrl fixed right-2 bottom-2">
        <SoundIcon className="md:min-w-[50px] min-w-[40px]" />
      </div>

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
          <Cont className="md:min-h-[200vh] min-h-[400vh]">
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
