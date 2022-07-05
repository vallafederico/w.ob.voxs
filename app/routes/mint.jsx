import indexcss from "../styles/index.css";
import { useRef, useEffect, useState } from "react";

import Main from "~/c/sh/Main";
import Section from "~/c/sh/Section.jsx";
import Cont from "~/c/sh/Cont.jsx";
import { MintButton } from "~/c/sh/Button.jsx";

import { FAKE_API } from "~/src/content.js";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Mint() {
  const mintRef = useRef(null);

  // useEffect(() => {
  //   console.log(mintRef.current);
  // }, []);

  return (
    <>
      <MintUi childRef={mintRef} />
      <Main canScroll={true}>
        <Section>
          <Cont>1</Cont>
        </Section>
        <Section>
          <Cont>2</Cont>
        </Section>
        <Section>
          <Cont>3</Cont>
        </Section>
        <Section>
          <Cont>4</Cont>
        </Section>
      </Main>
    </>
  );
}

/**
 * Mint UI
 */
export function MintUi({ childRef }) {
  // API
  // console.log("API-response", FAKE_API[0]);

  return (
    <Section
      childRef={childRef}
      className="MintUi fixed top-0 left-0 w-full h-full "
    >
      <Cont className="h-full md:w-[80vw] w-[99vw] bg-black text-white rounded-xl px-12 pb-12 text-center flex flex-col">
        {/* Header */}
        <div className="pb-12 pt-5 flex justify-between uppercase text-sm">
          <p>Mint Your Soul</p>
          <p>IC + Adress</p>
        </div>
        {/* Body */}
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-[55ch]">
            <h2 className="font-display text-red md:text-5xl mb-4">
              Select the VOX you want a soul to be minted for.
            </h2>
            <h3>
              Every VOX has it’s own soul. All souls are different and unique to
              the VOX they belong to.
            </h3>
          </div>
        </div>
        {/* DYNAMIC */}
        <div className="flex flex-col justify-between grow">
          <div className="flex justify-end border-b">
            <button className="text-xs uppercase p-4">Select All</button>
          </div>

          <div className="h-[40vh] overflow-y-scroll mb-8 p-4 grid md:grid-cols-6 gap-8">
            {FAKE_API.map((it, i) => (
              <SoulUi key={i} content={it} />
            ))}
          </div>

          <div>
            <MintButton />
          </div>
        </div>
      </Cont>
    </Section>
  );
}

function SoulUi({ content }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={`md:h-[20vh] h-[10vh] p-4 ${
        isSelected ? "bg-red" : ""
      } rounded-md flex flex-col justify-between`}
    >
      <img className="md:block hidden" src={content.image} alt="" />
      <p className={`text-xs mt-1 text-red ${isSelected ? "text-light" : ""}`}>
        #{content.number}
      </p>
      <h4>{content.tokenId}</h4>
    </div>
  );
}
