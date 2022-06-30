import { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";

import { Arrow } from "./sh/Svg";
import { MaverickSvg } from "./sh/SoulsLogo";

export default function Slider() {
  // slider State Handler
  const [isIn, setIsIn] = useState(false);
  const sliderUi = useRef(null);
  const sliderOverlay = useRef(null);
  const handleClick = () => {
    setIsIn(!isIn);
    animateSlide(sliderOverlay.current, isIn);
    animateUi(sliderUi.current, isIn);
  };

  // slider Index Handler
  const [index, setIndex] = useState(0);
  const handleIndex = (isForward = true) => {
    let nextIndex = isForward ? index + 1 : index - 1;
    if (nextIndex > 11) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = 11;
    }

    setIndex(nextIndex);
    // console.log(nextIndex);
  };

  return (
    <div className="Slider h-[100vh] sticky top-0 flex flex-col overflow-hidden">
      <div className="SliderMain relative grow flex flex-col justify-center pt-[20vh] pb-[10vh]">
        <Slide refChild={sliderOverlay} handleClick={handleClick} />
      </div>
      <SlideUi
        handleIndex={handleIndex}
        handleClick={handleClick}
        sliderUi={sliderUi}
      />
    </div>
  );
}

/**
 * Slide Content
 */
function Slide({ refChild, handleClick }) {
  return (
    // <div className="">
    <div
      ref={refChild}
      className="Slide h-auto max-h-[70vh] w-[30vw] bg-light rounded-xl p-9 absolute top-[20vh] right-8 translate-x-[200%] "
    >
      {/* Soul Header UI -- START */}
      <div className="grow flex justify-center px-9">
        <MaverickSvg className="md:min-w-[5vw] min-w-[25vw] md:m-5 m-2 py-5 " />

        <div className="m-5">
          <h2 className="font-display md:text-[3vw] text-[24px] leading-[1em] uppercase">
            <span className="block md:text-[18px] text-[12px] leading-[1em]">
              The
            </span>
            Maverick
          </h2>

          <h3 className=" uppercase text-red text-xs mt-2 md:mt-2">
            Free Spirit who lives by their own code
          </h3>
          <button
            onClick={handleClick}
            className="hidden md:block bg-black px-4 py-1 rounded-md uppercase text-white text-xs mt-5"
          >
            Close
          </button>
        </div>
      </div>
      {/* Soul Header UI -- END */}
      {/* SOul Content -- START */}
      <div className="text-xs max-h-[30vh] overflow-scroll">
        <div className="mt-2">
          <h4 className="text-red uppercase font-display mb-2">Strenghts</h4>
          <p>
            The fiery Maverick Soul is always center stage. They zig when the
            world zags, are honest to a fault, and exude self-confidence.
            Telling a Maverick something can't be done is a sure way to fire
            them up to prove otherwise. They are an ambitious Soul, with big
            dreams and the determination to realize them—no matter whom they rub
            the wrong way.
          </p>
        </div>
        <div className="mt-2">
          <h4 className="text-red uppercase font-display mb-2">Weaknesses</h4>
          <p>
            The Maverick’s drive and self-assuredness means they can find it
            difficult to admit when they are wrong or hasty. When backed into a
            corner, The Maverick doubles down on a “it’s my way or the highway”
            mentality and can come across as:
          </p>
        </div>
        <div className="mt-2">
          <h4 className="text-red uppercase font-display mb-2">Quirks</h4>
          <p>
            Smirks a thousand times a day just for the exercise. Is the reason
            why certain laws were made. Overuses the word,
            “antiestablishmentarianism”. Will ask for suggestions just to do the
            opposite. Always has a leather jacket and a pair of sunglasses on
            standby. Has a superpower for starting catchphrases.
          </p>
        </div>
      </div>
      {/* SOul Content -- End */}
    </div>
  );
}

/**
 * Slide UI
 */
function SlideUi({ sliderUi, handleClick, handleIndex }) {
  const arrowClicked = (isForward) => {
    handleIndex(isForward);
  };

  return (
    <div
      ref={sliderUi}
      className="SliderCtrl min-h-[10vw] mx-auto md:mb-[5vh] pb-9 md:pb-0 px-9 rounded-md bg-light flex items-center"
    >
      <button className="md:block hidden" onClick={() => arrowClicked(false)}>
        <Arrow isBack="true" />
      </button>

      <div>
        {/* Soul Header UI -- START */}
        <div className="grow flex justify-center px-9">
          <MaverickSvg className="md:min-w-[5vw] min-w-[25vw] md:m-5 m-2 py-5 " />

          <div className="m-5">
            <h2 className="font-display md:text-[3vw] text-[24px] leading-[1em] uppercase">
              <span className="block md:text-[18px] text-[12px] leading-[1em]">
                The
              </span>
              Maverick
            </h2>

            <h3 className=" uppercase text-red text-xs mt-2 md:mt-2">
              Free Spirit who lives by their own code
            </h3>
            <button
              onClick={handleClick}
              className="hidden md:block bg-black px-4 py-1 rounded-md uppercase text-white text-xs mt-5"
            >
              More info
            </button>
          </div>
        </div>
        {/* Soul Header UI -- END */}

        {/* Mobile UI */}
        <div className="md:hidden flex justify-between mt-5">
          <Arrow isBack="true" />
          <button
            onClick={handleClick}
            className="bg-black px-4 py-1 rounded-md uppercase text-white text-xs mt-5"
          >
            More info
          </button>
          <Arrow />
        </div>
      </div>

      <button className="md:block hidden" onClick={() => arrowClicked(true)}>
        <Arrow />
      </button>
    </div>
  );
}

/**
 * Animation
 */
function animateSlide(item, isIn = false) {
  const mvmt = isIn ? "200%" : "0%";
  gsap.to(item, {
    x: mvmt,
    duration: 0.8,
    ease: "expo.out",
  });
}

function animateUi(item, isIn = false) {
  const mvmt = isIn ? "0%" : "200%";
  gsap.to(item, {
    y: mvmt,
    duration: 0.8,
    ease: "expo.out",
  });
}
