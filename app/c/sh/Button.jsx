import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Button({ children, className, onClick, childRef = null }) {
  return (
    <button
      onClick={onClick}
      ref={childRef}
      className={`Button cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export function MintButton({
  className,
  childRef,
  text = "Connect Wallet",
  onClick,
}) {
  return (
    <a href="/mint">
      <Button
        onClick={onClick}
        childRef={childRef}
        className={`bg-red text-white pt-4 pb-3 md:px-14  px-8 sm:px-2 rounded-lg tx-display uppercase font-display md:text-[1.2em] sm:text-[1em] text-[.8em] leading-[.8em] ${className}`}
      >
        <div className="">
          Mint Yours
          <span className=" text-[.6em] font-sans hidden sm:block">{text}</span>
        </div>
      </Button>
    </a>
  );
}

export function ConfirmMintButton({
  className,
  childRef,
  text = "Connect Wallet",
  title = "Mint Yours",
  onClick,
}) {
  return (
    <Button
      onClick={onClick}
      childRef={childRef}
      className={`bg-red text-white pt-4 pb-3 md:px-14  px-8 sm:px-2 rounded-lg tx-display uppercase font-display md:text-[1.2em] sm:text-[1em] text-[.8em] leading-[.8em] ${className}`}
    >
      <div className="">
        {title}
        <span className=" text-[.6em] font-sans hidden sm:block">{text}</span>
      </div>
    </Button>
  );
}

export function AMintButton({ className, isIn = true }) {
  const A = useRef(null);
  useEffect(() => animateIn(A.current, isIn), [isIn]);

  return (
    <div ref={A} className="relative">
      <MintButton className={className} />
      <div className="absolute an-flash bottom-0 text-xs text-white w-full text-center translate-y-[8vh]">
        SCROLL TO DISCOVER
      </div>
    </div>
  );
}

function animateIn(item, bool) {
  const val = bool ? 1 : 0;
  gsap.to(item, {
    duration: 1,
    autoAlpha: val,
    ease: "expo.out",
  });
}
