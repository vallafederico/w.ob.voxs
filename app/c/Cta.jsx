import { CTACONTENT } from "~/src/content";
import Image from "~/c/sh/Image";

export function Cta({ className, children }) {
  return (
    <div
      className={`Cta ${className} bg-black rounded-2xl p-10 text-white text-center flex flex-col items-center relative`}
    >
      <h2 className="py-5 max-w-[15ch] font-display uppercase md:text-6xl text-4xl text-red">
        {CTACONTENT.title}
      </h2>
      <h3 className="max-w-[40ch] py-5">{CTACONTENT.text}</h3>
      <div className="md:hidden block ">
        {" "}
        <Image src={CTACONTENT.imgs[0].src} />
      </div>
      <div className="py-10">{children}</div>

      <div className="hidden md:absolute top-0 left-[-5vw] border-3 border-white w-[90vw] h-full md:flex justify-between content-center">
        {CTACONTENT.imgs.map((img, i) => (
          <Image key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export function LaunchCta({ className, children }) {
  return (
    <div
      className={`Cta ${className} bg-black rounded-2xl p-10 text-white text-center flex flex-col items-center relative`}
    >
      <div className="hidden md:absolute top-0 left-[-5vw] border-3 border-white w-[90vw] h-full md:flex justify-between content-center">
        {CTACONTENT.imgs.map((img, i) => (
          <Image key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
      <div className="relative z-2">
        <h2 className="py-5 max-w-[15ch] font-display uppercase md:text-6xl text-4xl text-red">
          <span className="block text-white">Get Your</span>
          <span className="block md:text-9xl text-8xl">Souls</span>
        </h2>
        <h3 className="max-w-[40ch] py-5">{CTACONTENT.text}</h3>
        <div className="md:hidden block ">
          {" "}
          <Image src={CTACONTENT.imgs[0].src} />
        </div>
        <div className="py-10">{children}</div>
      </div>
    </div>
  );
}
