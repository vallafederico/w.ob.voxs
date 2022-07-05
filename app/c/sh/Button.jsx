import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Button({ children, className, childRef = null }) {
  return (
    <button ref={childRef} className={`Button cursor-pointer ${className}`}>
      {children}
    </button>
  );
}

export function MintButton({ className, childRef }) {
  return (
    <Button
      childRef={childRef}
      className={`bg-red text-white pt-4 pb-3 md:px-14  px-8 rounded-lg tx-display uppercase font-display md:text-[1.2em] text-[1em] leading-[.8em] ${className}`}
    >
      <div>
        Mint Yours
        <span className="block text-[.6em] font-sans">Connect Wallet</span>
      </div>
    </Button>
  );
}

export function AMintButton({ className, isIn = true }) {
  const A = useRef(null);
  useEffect(() => animateIn(A.current, isIn), [isIn]);

  return <MintButton childRef={A} className={className} />;
}

function animateIn(item, bool) {
  const val = bool ? 1 : 0;
  gsap.to(item, {
    duration: 1,
    autoAlpha: val,
    ease: "expo.out",
  });
}
