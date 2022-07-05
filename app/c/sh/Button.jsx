export function Button({ children, className }) {
  return (
    <button className={`Button cursor-pointer ${className}`}>{children}</button>
  );
}

export function MintButton({ className }) {
  return (
    <Button
      className={`bg-red text-white pt-4 pb-3 md:px-14  px-8 rounded-lg tx-display uppercase font-display md:text-[1.2em] text-[1em] leading-[.8em] ${className}`}
    >
      <div>
        Mint Yours
        <span className="block text-[.6em] font-sans">Connect Wallet</span>
      </div>
    </Button>
  );
}

export function AnimMintButton({ className }) {
  return <MintButton className={className} />;
}

//  // int Obs
//   const wrapperRef = useRef(null);
//   useEffect(() => {
//     const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
//     gsap.registerPlugin(ScrollTrigger);

//     ScrollTrigger.create({
//       trigger: wrapperRef.current,
//       start: "top bottom",
//       end: "bottom top",
//       onToggle: (self) => fadeIn(wrapperRef, self.isActive),
//     });
//   }, []);
