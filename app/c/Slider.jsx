import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { Arrow } from "./sh/Svg";
import { SoulsIcon } from "./sh/SoulsLogo";
import { SLIDER_CONTENT } from "~/src/content.js";

export default function Slider({ soulIndex, setSoulIndex, id, setSoulIn }) {
  const sliderUiRef = useRef(null);
  const slideContentRef = useRef(null);

  // ** Anim ** Intersection Observer
  const wrapperRef = useRef(null);
  useEffect(() => {
    const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: wrapperRef.current.parentElement,
      start: "top top",
      end: "bottom bottom",
      onToggle: (self) => {
        fadeIn(sliderUiRef, self.isActive);
        if (!self.isActive) {
          setIsIn(false);
        }
      },
    });
  }, []);

  // -- **** Slider State
  const [isIn, setIsIn] = useState(false);
  const handleIsIn = () => setIsIn(!isIn);
  useEffect(() => {
    animateSliderIn(sliderUiRef, slideContentRef, isIn);
    setSoulIn(isIn);
  }, [isIn]);

  // -- **** Slider Index
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlideIndex = (isForward) => {
    const newIndex = getNewIndex(slideIndex, isForward);
    setSlideIndex(newIndex);
    setSoulIndex(newIndex);
  };

  // -- **** Current Content
  const currentSoul = SLIDER_CONTENT.SOULS[slideIndex];

  return (
    <div
      id={id}
      ref={wrapperRef}
      className="Slider h-[100vh] sticky top-0 flex flex-col overflow-hidden"
    >
      <Slides
        currentContent={currentSoul}
        childRef={slideContentRef}
        slideIndex={slideIndex}
        handleIsIn={handleIsIn}
      />
      <SliderUi
        currentContent={currentSoul}
        childRef={sliderUiRef}
        slideIndex={slideIndex}
        handleSlideIndex={handleSlideIndex}
        handleIsIn={handleIsIn}
      />
    </div>
  );
}

/**
 * Slides
 */
function Slides({ childRef, slideIndex, handleIsIn, currentContent }) {
  return (
    <div
      ref={childRef}
      className="Slides absolute xl:w-1/3 lg:w-1/2 md:w-1/2 bottom-0 h-[70vh] md:mb-[10vh] mb-[5vh] md:right-9 translate-x-[100%]"
    >
      <Slide
        handleIsIn={handleIsIn}
        slideIndex={slideIndex}
        currentContent={currentContent}
      />
    </div>
  );
}

function Slide({ handleIsIn, currentContent }) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="h-full w-full bg-light rounded-2xl p-8 flex flex-col">
      {/* Heading */}
      <div className="flex justify-between grow gap-9 items-center">
        <div>
          <h3 className="font-display leading-9">
            <span className="block">THE</span>
            <span className="md:text-[3vw] text-[7vw] uppercase">
              {currentContent.title}
            </span>
          </h3>
          <h4 className="text-red uppercase text-xs">
            {currentContent.tagline}
          </h4>
        </div>
        <SoulsIcon
          name={currentContent.title}
          className="md:h-[5vw] md:w-[5vw] h-[6vw] w-[6vw] min-h-[50px] min-w-[50px] hidden md:block"
        />
        <button
          className="bg-black text-white rounded-[100%] leading-[0px] w-8 h-8 flex justify-center items-center uppercase text-xs"
          onClick={() => handleIsIn()}
        >
          X
        </button>
      </div>

      {/* Content */}
      <div className="mt-9 h-full flex flex-col">
        {/*  Tabs Heading */}
        <div className="flex justify-between gap-8 text-[0.8em] mb-5 border-b-2 border-white pb-5">
          <button
            className={`${
              currentTab === 0 ? "border-b-2 border-red" : "opacity-20"
            } uppercase`}
            onClick={() => setCurrentTab(0)}
          >
            Overview
          </button>
          <button
            className={`${
              currentTab === 1 ? "border-b-2 border-red" : "opacity-20"
            } uppercase`}
            onClick={() => setCurrentTab(1)}
          >
            Personality
          </button>
          <button
            className={`${
              currentTab === 2 ? "border-b-2 border-red" : "opacity-20"
            } uppercase`}
            onClick={() => setCurrentTab(2)}
          >
            Strengths & Weaknesses
          </button>
        </div>

        <div className="overflow-scroll md:h-[40vh] h-[35vh]">
          {/*   -------- FIRST TAB */}
          <div className="md:hidden flex">
            <h5 className="uppercase text-red text-sm py-4 mr-8">Symbol</h5>
            <SoulsIcon
              name={currentContent.title}
              className="h-[20vw] w-[20vw]"
            />
          </div>

          <div
            className={`${
              currentTab === 0 ? "visible" : "hidden"
            } overflow-scroll`}
          >
            <h5 className="uppercase text-red text-sm py-4">Overview</h5>
            <p className=" text-sm">{currentContent.content}</p>
            {/* Text In First Tab */}
            <h5 className="uppercase text-red text-sm py-4">Great at</h5>
            <p className=" text-sm">{currentContent.adds.great}</p>
            <h5 className="uppercase text-red text-sm py-4">Stats</h5>
            <div className="text-sm py-2 flex gap-3 wrap">
              {currentContent.stats.map((it, i) => (
                <p
                  className="text-red py-2 px-4 border-red border bg-[#F9EEDE] text-xs rounded-md inline-block"
                  key={i}
                >
                  + {it.value} {it.title}
                </p>
              ))}
            </div>
          </div>

          {/*   -------- SECOND TAB */}
          <div
            className={`${
              currentTab === 1 ? "visible" : "hidden"
            } overflow-scroll`}
          >
            {/* Stren */}
            <h5 className="uppercase text-red text-sm py-4">Strenghts</h5>
            <p className=" text-sm">{currentContent.adds.strengths.content}</p>
            <p className=" text-sm py-2">
              {currentContent.adds.strengths.list}
            </p>
            {/* Weak */}
            <h5 className="uppercase text-red text-sm py-4">Weaknesses</h5>
            <p className=" text-sm">{currentContent.adds.weaknesses.content}</p>
            <p className=" text-sm py-2">
              {currentContent.adds.weaknesses.list}
            </p>
            {/* Quirks */}
            <h5 className="uppercase text-red text-sm py-4">Quirks</h5>
            <div className=" text-sm">
              {currentContent.adds.quirks.map((cont, i) => (
                <p key={i}>{cont}</p>
              ))}
            </div>
          </div>

          {/*   -------- THIRD TAB */}
          <div
            className={`${
              currentTab === 2 ? "visible" : "hidden"
            } overflow-scroll`}
          >
            {/* Freinds */}
            <h5 className="uppercase text-red text-sm py-4">Friends With</h5>
            <p className=" text-sm">{currentContent.adds.friend}</p>
            {/* Enemies */}
            <h5 className="uppercase text-red text-sm py-4">Clashes With</h5>
            <p className=" text-sm">{currentContent.adds.clashes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Slider UI
 */
function SliderUi({ handleSlideIndex, handleIsIn, childRef, currentContent }) {
  // console.log("ui", currentContent);
  return (
    <div
      ref={childRef}
      className="SlideUi absolute w-full h-[15vh] md:bottom-0 bottom-[5vh] flex justify-center"
    >
      <div className="md:w-1/2 w-full bg-light rounded-2xl flex items-center justify-between p-8">
        <SliderArrow onClick={() => handleSlideIndex(false)} isBack="true" />
        {/* Info - START */}
        <div className="flex justify-between grow gap-9 px-9 items-center">
          <SoulsIcon
            name={currentContent.title}
            className="h-[5vw] w-[5vw]  md:block hidden"
          />
          <div>
            <h3 className="font-display md:leading-8">
              <span className="block md:leading-8">THE</span>
              <span className="md:text-[3vw] text-[5vw] uppercase">
                {currentContent.title}
              </span>
            </h3>
            <h4 className="text-red uppercase text-xs md:block hidden">
              {currentContent.tagline}
            </h4>
          </div>
          <button
            className="bg-black text-white rounded-md p-3 uppercase md:text-xs  text-[.6em]"
            onClick={() => handleIsIn()}
          >
            Discover
          </button>
        </div>
        {/* Info - END */}
        <SliderArrow onClick={() => handleSlideIndex(true)} />
      </div>
    </div>
  );
}

/*** Utils */
function SliderArrow({ isBack = false, onClick = false }) {
  return (
    <button onClick={onClick}>
      <Arrow isBack={isBack} />
    </button>
  );
}

// Handle Slide Index
function getNewIndex(currentI, isForward) {
  let nextIndex = isForward ? currentI + 1 : currentI - 1;
  if (nextIndex > 11) {
    nextIndex = 0;
  } else if (nextIndex < 0) {
    nextIndex = 11;
  }
  return nextIndex;
}

/*** Animation */
function animateSliderIn(itemUi, itemSlide, goIn = false) {
  if (!goIn) {
    gsap.to(itemUi.current, {
      duration: 0.5,
      ease: "expo.out",
      y: "0%",
    });
    gsap.to(itemSlide.current, {
      duration: 0.5,
      ease: "expo.out",
      x: "120%",
    });
  } else {
    gsap.to(itemUi.current, {
      duration: 0.5,
      ease: "expo.out",
      y: "200%",
    });
    gsap.to(itemSlide.current, {
      duration: 0.5,
      ease: "expo.out",
      x: "0%",
    });
  }
}

function fadeIn(item, goIn = false) {
  // console.log(goIn);
  let val = goIn ? 1 : 0;

  gsap.to(item.current, {
    duration: 0.5,
    ease: "expo.out",
    autoAlpha: val,
    delay: 0,
  });
}
