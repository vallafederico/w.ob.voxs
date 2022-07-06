import { CTACONTENT } from "~/src/content";
import Image from "~/c/sh/Image";

export function LaunchCta({ className, children }) {
  return (
    <>
      <div
        className={`Cta ${className} bg-black rounded-2xl p-10 text-white text-center flex flex-col items-center relative`}
      >
        <div className="hidden lg:absolute top-0 left-[-5vw] border-3 border-white w-[90vw] h-full lg:flex justify-between items-center">
          {CTACONTENT.imgs.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              className="max-w-[30vw] max-h-[30vw]"
            />
          ))}
        </div>
        <div className="relative z-2">
          <h2 className="py-5 font-display uppercase md:text-6xl text-4xl text-red">
            <span className="block text-white">SOULS MINT OPEN</span>
            <span className="block md:text-7 xl:text-[5vw] text-8xl ">NOW</span>
          </h2>
          <h3 className="py-5">
            <p>Every VOX has it’s own soul.</p>
            <p>All souls are different and unique to the VOX they belong to.</p>
          </h3>
          <div className="lg:hidden block">
            {" "}
            <Image src={CTACONTENT.imgs[0].src} />
          </div>
          <div className="py-10">{children}</div>
        </div>
      </div>
    </>
  );
}

export function AdditionalCta({ className }) {
  return (
    <div className="flex justify-center my-6">
      <div className="md:flex justify-between items-center w-2/3 text-xs">
        <div className="uppercase">
          Discover more on{" "}
          <a
            className="underline"
            href="https://collectvox.com/"
            target="_blank"
            rel="noreferrer"
          >
            collectvox.com
          </a>
        </div>
        <a
          href="https://opensea.io/collection/collectvoxtownstar"
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white p-3 px-8 rounded-xl md:my-0 my-6"
        >
          NOT A VOX HOLDER? GET YOURS ->
        </a>
      </div>
    </div>
  );
}
