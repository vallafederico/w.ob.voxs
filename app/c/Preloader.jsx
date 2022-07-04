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
      className="Preloader fixed top-0 left-0 w-full h-full flex justify-center bg-black z-12 items-center"
    >
      <p ref={loadingText} className="font-display text-white text-[10vw]">
        00
      </p>
    </div>
  );
}
