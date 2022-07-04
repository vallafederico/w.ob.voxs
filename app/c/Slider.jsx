import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { Arrow } from "./sh/Svg";
import { MaverickSvg } from "./sh/SoulsLogo";

import { SLIDER_CONTENT } from "~/src/content.js";

export default function Slider({ soulIndex, setSoulIndex }) {
  const sliderUiRef = useRef(null);
  const slideContentRef = useRef(null);

  // -- **** Slider State
  const [isIn, setIsIn] = useState(false);
  const handleIsIn = () => setIsIn(!isIn);
  useEffect(() => {
    animateSliderIn(sliderUiRef, slideContentRef, isIn);
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
  // console.log(currentSoul);

  return (
    <div className="Slider h-[100vh] sticky top-0 flex flex-col overflow-hidden">
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
      className="Slides absolute lg:w-1/3 md:w-2/5 bottom-0 h-[70vh] md:mb-[20vh] mb-[5vh] md:right-9 translate-x-[100%]"
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
            <span className="md:text-[4vw] text-[8vw]">
              {currentContent.title}
            </span>
          </h3>
          <h4 className="text-red uppercase text-xs">Soul short tagline </h4>
        </div>
        <MaverickSvg className="md:h-[5vw] md:w-[5vw] h-[8vw] w-[8vw]" />
        <button
          className="bg-black text-white rounded-[100%] leading-[0px] w-9 h-9 flex justify-center items-center uppercase text-xs"
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

        <div className="overflow-scroll h-[40vh]">
          {/*   -------- FIRST TAB */}
          <div
            className={`${
              currentTab === 0 ? "visible" : "hidden"
            } overflow-scroll`}
          >
            <h5 className="uppercase text-red text-sm py-4">Overview</h5>
            <p className=" text-xs">{currentContent.content}</p>
            {/* Text In First Tab */}
            <h5 className="uppercase text-red text-sm py-4">Great at</h5>
            <p className=" text-xs">{currentContent.adds.great}</p>
            <h5 className="uppercase text-red text-sm py-4">Stats</h5>
            <div className="text-xs py-2 flex gap-3">
              {currentContent.stats.map((it, i) => (
                <p
                  className="text-red py-2 px-4 border-red border bg-[#F9EEDE] rounded-md inline-block"
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
            <p className=" text-xs">{currentContent.adds.strengths.content}</p>
            <p className=" text-xs py-2">
              {currentContent.adds.strengths.list}
            </p>
            {/* Weak */}
            <h5 className="uppercase text-red text-sm py-4">Weaknesses</h5>
            <p className=" text-xs">{currentContent.adds.weaknesses.content}</p>
            <p className=" text-xs py-2">
              {currentContent.adds.weaknesses.list}
            </p>
            {/* Quirks */}
            <h5 className="uppercase text-red text-sm py-4">Quirks</h5>
            <div className=" text-xs">
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
            <p className=" text-xs">{currentContent.adds.friend}</p>
            {/* Enemies */}
            <h5 className="uppercase text-red text-sm py-4">Clashes With</h5>
            <p className=" text-xs">{currentContent.adds.clashes}</p>
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
      className="SlideUi absolute w-full h-[15vh] bottom-0 flex justify-center"
    >
      <div className="md:w-1/2 w-full bg-light rounded-2xl flex items-center justify-between p-8">
        <SliderArrow onClick={() => handleSlideIndex(false)} isBack="true" />
        {/* Info - START */}
        <div className="flex justify-between grow gap-9 px-9 items-center">
          <MaverickSvg className="h-[5vw] w-[5vw] md:block hidden" />
          <div>
            <h3 className="font-display leading-5">
              <span className="block md:leading-8">THE</span>
              <span className="md:text-[3vw] text-[5vw]">
                {currentContent.title}
              </span>
            </h3>
            <h4 className="text-red uppercase text-xs">Soul short tagline </h4>
          </div>
          <button
            className="bg-black text-white rounded-md p-3 uppercase text-xs"
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
      y: "100%",
    });
    gsap.to(itemSlide.current, {
      duration: 0.5,
      ease: "expo.out",
      x: "0%",
    });
  }
}
