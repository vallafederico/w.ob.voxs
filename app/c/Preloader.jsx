import { useEffect, useRef } from "react";
import gsap from "gsap";

import { SLIDER_CONTENT } from "~/src/content";
// console.log(SLIDER_CONTENT.SOULS[0]);

export default function Preloader({ isLoading = 0, isFinished = false }) {
  const loadingText = useRef(null);
  const wrapper = useRef(null);
  let loadingCounter = { c: 0 };

  // out animation
  useEffect(() => {
    if (isFinished) {
      gsap.to(loadingText.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: "expo.out",
        delay: 0.5,
      });

      gsap.to(wrapper.current, {
        autoAlpha: 0,
        duration: 0.5,
        delay: 1,
        ease: "expo.in",
        onComplete: () => (wrapper.current.style.display = "none"),
      });
    }
  }, [isFinished]);

  // loading counter
  useEffect(() => {
    // console.log(isLoading);

    gsap.to(loadingCounter, {
      c: isLoading,
      duration: 1,
      ease: "expo.out",
      onUpdate: () => {
        loadingText.current.textContent = Math.round(loadingCounter.c);
      },
    });
  }, [isLoading]);

  return (
    <div
      ref={wrapper}
      className="Preloader fixed top-0 left-0 w-full h-full p-9 flex flex-col justify-between bg-black z-[999] items-center pt-[40vh]"
    >
      <p
        ref={loadingText}
        className="font-display text-white md:text-[10vw] text-[20vw]"
      >
        {isLoading}
      </p>
      <div className="Scroller an-scroller overflow-hidden text-white whitespace-nowrap flex justify-start items-start content-start font-light uppercase text-xs">
        <div>
          {SLIDER_CONTENT.SOULS.map((soul, index) => (
            <div key={index} className="inline px-8">
              <p className="px-2 inline font-display">THE {soul.title}</p>
              <p className="px-2 inline">{soul.tagline}</p>
            </div>
          ))}
          {SLIDER_CONTENT.SOULS.map((soul, index) => (
            <div key={index} className="inline px-8">
              <p className="px-2 inline font-display">THE {soul.title}</p>
              <p className="px-2 inline">{soul.tagline}</p>
            </div>
          ))}
          {SLIDER_CONTENT.SOULS.map((soul, index) => (
            <div key={index} className="inline px-8">
              <p className="px-2 inline font-display">THE {soul.title}</p>
              <p className="px-2 inline">{soul.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
