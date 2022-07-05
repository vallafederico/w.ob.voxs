import { useEffect, useRef } from "react";
import gsap from "gsap";

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
        0
      </p>
      <div className="Scroller overflow-hidden text-white whitespace-nowrap flex justify-start items-start content-start font-light uppercase">
        <div className="an-scroller inline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="an-scroller inline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="an-scroller inline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}
