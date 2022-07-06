import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cont({ children, className, isIn = true }) {
  const wrapper = useRef(null);

  useEffect(() => {
    if (isIn) {
      gsap.to(wrapper.current, {
        autoAlpha: 1,
        duration: 0.6,
        delay: 6.5,
        ease: "expo.in",
      });
    } else {
      gsap.set(wrapper.current, {
        autoAlpha: 0,
      });
    }
  });

  return (
    <div ref={wrapper} className={`Cont w-[80vw] mx-auto ${className}`}>
      {children}
    </div>
  );
}
