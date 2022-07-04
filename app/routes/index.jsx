import indexcss from "../styles/index.css";
import { useState, useRef, useMemo } from "react";

import Nav from "~/c/Nav";
import Main from "~/c/sh/Main";
import Wrapper from "~/c/sh/Wrapper";
import Section from "~/c/sh/Section";
import Cont from "~/c/sh/Cont";
import Slider from "~/c/Slider";

import TextBoxes from "../c/TextBox";
import Footer from "../c/Footer";
import { LaunchCta } from "../c/Cta";
import Preloader from "../c/Preloader";

import Canvas from "../gl/Canvas";

// import { SoundIcon } from "../c/sh/Svg";
import Sound from "../c/Sound";

import { MintButton } from "~/c/sh/Button";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Index() {
  // scroll bool for preloader
  const [canScroll, setCanScroll] = useState(false);
  const [preloaderOut, setPreloaderOut] = useState(false);
  const [isLoading, setIsLoading] = useState(0);
  const scrollRef = useRef(null);
  const sliderRef = useRef(null);
  const ctaRef = useRef(null);
  // THREEEJS Refs
  const [soulIndex, setSoulIndex] = useState(0);
  const TSoulIndex = useMemo(
    () => ({ soulIndex, setSoulIndex }),
    [soulIndex, setSoulIndex]
  );

  const [soulIn, setSoulIn] = useState(false);
  const TSoulIn = useMemo(
    () => ({ soulIn, setSoulIndex }),
    [soulIn, setSoulIndex]
  );

  // THREE - handling
  return (
    <>
      <Canvas
        scrollRef={scrollRef}
        sliderRef={sliderRef}
        ctaRef={ctaRef}
        setCanScroll={setCanScroll}
        soulIndex={TSoulIndex}
        setPreloaderOut={setPreloaderOut}
        setIsLoading={setIsLoading}
      />

      <Wrapper>
        <Nav />
        {/*  */}

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
          <Section className="Scroll " childRef={scrollRef}>
            <Cont className="md:min-h-[200vh] min-h-[400vh]">
              <TextBoxes />
            </Cont>
          </Section>
          <Section
            childRef={sliderRef}
            id="slider"
            className="Slider relative h-[300vh]"
          >
            <Slider soulIndex={soulIndex} setSoulIndex={setSoulIndex} />
            <Cont></Cont>
          </Section>
          <div ref={ctaRef}>
            <Section
              id="info"
              className="Info bg-gradient-to-t from-white to-transparent via-white"
            >
              <Cont>
                <LaunchCta>
                  <MintButton />
                </LaunchCta>
              </Cont>
            </Section>
            <Footer />
          </div>
        </Main>
        <Sound />
      </Wrapper>
      <Preloader isFinished={preloaderOut} isLoading={isLoading} />
    </>
  );
}
