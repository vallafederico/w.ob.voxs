import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroText({ isIn }) {
  const textRef = useRef(null);
  const secTextRef = useRef(null);
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
  }, [isIn]);

  return (
    <h1 className="text-5xl text-center font-display">
      <div
        ref={textRef}
        className="block md:text-[10vw] text-8xl overflow-hidden"
      >
        <div className="inline-block relative">S</div>
        <div className="inline-block relative">O</div>
        <div className="inline-block relative">U</div>
        <div className="inline-block relative">L</div>
        <div className="inline-block relative">S</div>
      </div>

      <div ref={secTextRef} className="block overflow-hidden">
        <div className="inline-block relative">ARE</div>
        {"  "}
        <div className="inline-block relative">HERE</div>
      </div>
    </h1>
  );
}
