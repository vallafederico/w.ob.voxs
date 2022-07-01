import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { Arrow } from "./sh/Svg";
// import { MaverickSvg } from "./sh/SoulsLogo";

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
      className="Slides absolute w-2/5 bottom-0 h-[60vh] mb-[20vh] right-9 translate-x-[100%]"
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
  // console.log("slide", currentContent);

  return (
    <div className="h-full w-full bg-light rounded-2xl p-8">
      <h3>{currentContent.title}</h3>
      <button onClick={handleIsIn}>In and out</button>
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
      className="SlideUi absolute w-full h-[10vh] bottom-0 flex justify-center"
    >
      <div className="md:w-1/2 w-full bg-light rounded-2xl flex items-center justify-between p-8">
        <SliderArrow onClick={() => handleSlideIndex(false)} isBack="true" />
        {/* Info - START */}
        <div>
          <h3>{currentContent.title}</h3>
          <button onClick={() => handleIsIn()}>Set In</button>
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
