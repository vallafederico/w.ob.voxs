import { useActionData } from "@remix-run/react";

import indexcss from "../styles/index.css";
import { useState, useRef, useMemo, useEffect } from "react";
import gsap from "gsap";

import Nav from "~/c/Nav";
import Main from "~/c/sh/Main";
import Wrapper from "~/c/sh/Wrapper";
import Section from "~/c/sh/Section";
import Cont from "~/c/sh/Cont";
import Slider from "~/c/Slider";

import TextBoxes from "../c/TextBox";
import Footer from "../c/Footer";
import { LaunchCta, HomeAdditionalCta } from "../c/Cta";
import Preloader from "../c/Preloader";
import Canvas from "../gl/Canvas";
import Sound from "../c/Sound";

import HeroText from "../c/sh/HeroText";

import { MintButton, AMintButton } from "~/c/sh/Button";

import { subscribeHandler } from "~/signup/newsletter-signup.js";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

/* -- Newsletter Signup */

export async function action({ request }) {
  const formData = await request.formData();
  let email = formData.get("email");

  const sub = await subscribeHandler(email);
  console.log("SUB", sub);

  return { statusCode: sub.statusCode };
}

export default function Index() {
  const formData = useActionData();
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
  const TSoulIn = useMemo(() => ({ soulIn }), [soulIn]);

  // state for hero
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => {
    if (preloaderOut) {
      setHeroIn(true);
    }
  }, [preloaderOut]);

  // button trigger
  const [buttonIn, setButtonIn] = useState(true);
  useEffect(() => {
    const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: scrollRef.current,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => {
        // console.log(scrollRef, self.isActive);
        setButtonIn(!self.isActive);
      },
    });
  }, []);

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
        soulIn={TSoulIn}
      />

      <Wrapper>
        <Nav isIn={heroIn} />
        {/*  */}

        <Main canScroll={canScroll}>
          <Section className="Hero h-screen flex flex-col justify-between content-center">
            <Cont isIn={heroIn} className="pt-8">
              <HeroText isIn={heroIn} />
            </Cont>

            <Cont isIn={heroIn} className="flex justify-center content-center">
              <AMintButton isIn={buttonIn} />
            </Cont>
          </Section>
          <Section className="Scroll" childRef={scrollRef}>
            <Cont className="md:min-h-[200vh] min-h-[400vh] pb-[50vh]">
              <TextBoxes />
            </Cont>
          </Section>
          <Section childRef={sliderRef} className="Slider relative h-[300vh]">
            <Slider
              id="slider"
              soulIndex={soulIndex}
              setSoulIndex={setSoulIndex}
              setSoulIn={setSoulIn}
            />
          </Section>
          <div ref={ctaRef}>
            <Section
              id="info"
              className="Info bg-gradient-to-t from-white to-transparent via-white py-[10vh]"
            >
              <Cont>
                <LaunchCta>
                  <MintButton />
                </LaunchCta>
              </Cont>
              <HomeAdditionalCta className="mt-[5vh]" />
            </Section>

            <Footer formData={formData} />
          </div>
        </Main>
        <Sound />
      </Wrapper>
      <Preloader isFinished={preloaderOut} isLoading={isLoading} />
    </>
  );
}
