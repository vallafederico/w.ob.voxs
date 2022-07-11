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

    if (isIn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
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

  //  modal open
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    // console.log(modalOpen);
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalOpen]);

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
        handleModal={handleModal}
      />
      <Modal isOpen={modalOpen} handleModal={handleModal} />
    </div>
  );
}

// Modal
function Modal({ isOpen, handleModal }) {
  return (
    <div
      className={`${
        isOpen ? "absolute" : "hidden"
      } border-3  top-0 left-0 w-full h-full flex items-center justify-center`}
    >
      <div className="absolute w-full h-full bg-black blur-xl opacity-40"></div>

      <div className="TextBox p-10 my-[10vh] bg-light rounded-lg md:w-2/3 lg:w-1/3 xl:w-1/4 relative">
        <p className="text-red uppercase">Who Will You Be?</p>
        <h3 className="font-display font-black text-6xl mb-9">THE 12 SOULS</h3>
        <p className="font-light">
          Every single Soul is different. No Soul is better or worse than
          another. It’s all up to how you want to play in <i>VOX Odyssey</i> and
          who you want to become in the <i>VOXverse.</i>
        </p>
        <button
          onClick={() => handleModal()}
          className="absolute top-5 right-5 w-8 h-8 rounded-[100%] bg-black text-white text-xs font-display"
        >
          X
        </button>
      </div>
    </div>
  );
}

// End Modal

/**
 * Slides
 */
function Slides({ childRef, slideIndex, handleIsIn, currentContent }) {
  return (
    <div
      ref={childRef}
      className="Slides absolute xl:w-1/3 lg:w-1/2 md:w-2/3 bottom-0 h-[70vh] md:h-[60vh] md:mb-[10vh] mb-[5vh] md:right-9 translate-x-[100%]"
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
  const resetCurrent = () => setCurrentTab(0);

  return (
    <div className="h-full w-full bg-light rounded-2xl p-8 flex flex-col">
      {/* Heading */}
      <div className="flex justify-between grow gap-9 items-center">
        <div>
          <h3 className="font-display uppercase">
            <span className="block md:text-[1em] sm:text-[.8em] lg:text-[1.3em] xl:text-[1.3em] leading-[1em]">
              THE
            </span>
            <span className="block text-[1.5em] leading-[1.1em] sm:text-[3em] md:text-[2em] lg:text-[2.5em] xl:text-[3em]">
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
          className="bg-black text-white rounded-[100%] leading-[0px] w-8 h-8 shrink-0 flex justify-center items-center uppercase text-xs"
          onClick={() => {
            handleIsIn();
            resetCurrent();
          }}
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
            Friends & Foes
          </button>
        </div>

        <div className="overflow-scroll lg:h-[35vh] md:h-[40vh] h-[40vh]">
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
            <div className="text-sm py-2 flex gap-3 flex-wrap">
              {currentContent.stats.map((it, i) => (
                <p
                  className="text-red py-2 px-4 border-red border bg-[#F9EEDE] text-xs rounded-md inline-block whitespace-nowrap"
                  key={i}
                >
                  + {it.value} {it.title} Gain
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
            <ul className=" text-sm py-2 style-list">
              {currentContent.adds.strengths.list.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
            {/* Weak */}
            <h5 className="uppercase text-red text-sm py-4">Weaknesses</h5>
            <p className=" text-sm">{currentContent.adds.weaknesses.content}</p>
            <ul className=" text-sm py-2 style-list">
              {currentContent.adds.weaknesses.list.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
            {/* Quirks */}
            <h5 className="uppercase text-red text-sm py-4">Quirks</h5>
            <div className=" text-sm">
              <ul className="style-list">
                {currentContent.adds.quirks.map((cont, i) => (
                  <li key={i}>{cont}</li>
                ))}
              </ul>
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
function SliderUi({
  handleSlideIndex,
  handleIsIn,
  childRef,
  currentContent,
  handleModal,
}) {
  // console.log("ui", currentContent);
  return (
    <div
      ref={childRef}
      className="SlideUi absolute w-full h-[15vh] md:bottom-0 bottom-[5vh] flex justify-center "
    >
      <div className="xl:w-1/2 md:w-4/5 w-full bg-light rounded-2xl flex items-center justify-between px-6 py-8">
        <SliderArrow onClick={() => handleSlideIndex(false)} isBack="true" />
        {/* Info - START */}
        <div className="flex justify-between grow gap-9 px-9 items-center">
          <SoulsIcon
            name={currentContent.title}
            className="w-[5vw] sm:w-[15vw] md:w-[10vw] xl:w-[7vw] max-w-[150px] sm:block hidden"
          />
          <div>
            <h3 className="font-display uppercase">
              <span className="block md:text-[1em] sm:text-[.8em] lg:text-[1.3em] xl:text-[1.8em] leading-[1.1em]">
                THE
              </span>
              <span className="block text-[1.5em] leading-[1.1em] sm:text-[3em] md:text-[2em] lg:text-[2.5em] xl:text-[3em]">
                {currentContent.title}
              </span>
            </h3>

            <h4 className="text-red uppercase text-xs md:block hidden max-w-[30ch]">
              {currentContent.tagline}
            </h4>
          </div>
          <button
            className="bg-black text-white rounded-md p-2 uppercase md:text-xs  text-[.6em]"
            onClick={() => handleIsIn()}
          >
            Discover
          </button>
        </div>
        {/* Info - END */}
        <SliderArrow onClick={() => handleSlideIndex(true)} />
      </div>
      <ModalTrigger handleModal={handleModal} />
    </div>
  );
}

function ModalTrigger({ handleModal }) {
  return (
    <div
      onClick={() => handleModal()}
      className="absolute text-xs uppercase text-red flex justify-between items-center bg-black p-3 rounded-t-xl translate-y-[-100%]"
    >
      <p>What VOX will I Be?</p>
      <p className="ml-8 text-black bg-red w-[2em] h-[2em] flex items-center justify-center rounded-[100%]">
        ?
      </p>
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
