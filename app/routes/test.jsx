import indexcss from "../styles/index.css";
import { useState, useRef, useMemo, useEffect } from "react";
import gsap from "gsap";

import Main from "~/c/sh/Main";
import Section from "~/c/sh/Section.jsx";
import Cont from "~/c/sh/Cont.jsx";
import Slider from "~/c/Slider";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Test() {
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
  return (
    <>
      <Main canScroll={true}>
        <Section childRef={sliderRef} className="Slider relative h-[50vh]">
          <Slider
            id="slider"
            soulIndex={soulIndex}
            setSoulIndex={setSoulIndex}
            setSoulIn={setSoulIn}
          />
        </Section>
        <Section>
          <Cont>2</Cont>
        </Section>
        <Section>
          <Cont>3</Cont>
        </Section>
        <Section>
          <Cont>4</Cont>
        </Section>
      </Main>
    </>
  );
}
