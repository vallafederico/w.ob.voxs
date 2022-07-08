import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroText({ isIn }) {
  const textRef = useRef(null);
  const secTextRef = useRef(null);
  const thirdTextRef = useRef(null);
  // Initial State
  useEffect(() => {
    gsap.set(textRef.current.children, {
      y: "300%",
      autoAlpha: 0,
    });
    gsap.set(secTextRef.current.children, {
      y: "300%",
      autoAlpha: 0,
    });
    gsap.set(thirdTextRef.current, {
      autoAlpha: 0,
    });
  }, []);

  // Trigger Effect
  useEffect(() => {
    gsap.to(textRef.current.children, {
      y: "0%",
      autoAlpha: 1,
      delay: 7,
      duration: 1.2,
      ease: "expo.out",
      stagger: {
        each: 0.1,
      },
    });

    gsap.to(secTextRef.current.children, {
      y: "0%",
      autoAlpha: 1,
      delay: 7.5,
      duration: 1.2,
      ease: "expo.out",
      stagger: {
        each: 0.1,
      },
    });

    gsap.to(thirdTextRef.current, {
      autoAlpha: 1,
      delay: 8,
      duration: 1.2,
    });
  }, [isIn]);

  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl text-center font-display md:mt-0 mt-8">
        <div
          ref={secTextRef}
          className="block overflow-hidden xl:text-[3vw] leading-[1.1em]"
        >
          <div className="inline-block relative">INTRODUCING</div>
        </div>

        <div
          ref={textRef}
          className="block lg:text-[8vw] md:text-[12vw] text-5xl overflow-hidden"
        >
          <div className="inline-block relative">V</div>
          <div className="inline-block relative">O</div>
          <div className="inline-block relative">X</div>{" "}
          <div className="inline-block relative">S</div>
          <div className="inline-block relative">O</div>
          <div className="inline-block relative">U</div>
          <div className="inline-block relative">L</div>
          <div className="inline-block relative">S</div>
        </div>
      </h1>

      <p
        ref={thirdTextRef}
        className="font-sans lg:text-xl text-base max-w-[60ch] text-red font-light"
      >
        Breathe life into Avatars that DeFi, with Souls that change your stat
        gain and impact your adventures in-game.
      </p>
    </div>
  );
}
