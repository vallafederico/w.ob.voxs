import indexcss from "../styles/index.css";
import { useRef, useEffect } from "react";

import Main from "~/c/sh/Main";
import Section from "~/c/sh/Section.jsx";
import Cont from "~/c/sh/Cont.jsx";
import { MintButton } from "~/c/sh/Button.jsx";

import API from "~/src/api.json";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Mint() {
  const mintRef = useRef(null);

  useEffect(() => {
    console.log(mintRef.current);
  }, []);

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
  const { response } = API;
  // console.log("API-response", response);

  return (
    <Section
      childRef={childRef}
      className="MintUi fixed top-0 left-0 w-full h-full"
    >
      <Cont className="h-full bg-black text-white rounded-xl px-12 pb-12  text-center flex flex-col">
        {/* Header */}
        <div className="pb-12 pt-5 flex justify-between uppercase text-sm">
          <p>Mint Your Soul</p>
          <p>IC + Adress</p>
        </div>
        {/* Body */}
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-[55ch]">
            <h2 className="font-display text-red text-5xl mb-4">
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

          <div className="h-[40vh] overflow-y-scroll mb-8 p-4 grid md:grid-cols-8 gap-2">
            {tempArray.map((it, i) => (
              <SoulUi key={i} />
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

function SoulUi() {
  return <div className="min-h-[10vh]">Soul Ui</div>;
}

const tempArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6,
  7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2,
  3, 4, 5, 6, 7, 8, 9, 0,
];

/*

name = `name`
 image url = `image`
 image # = `tokenId`
 soul name = `soul.name`
 soul image url = `soul.image`
{
  address: string;
  tokenId?: string;
  tokenMetadataUri?: string;
  boxAddress: string;
  boxTokenId: string;
  boxTokenMetadataUri: string;
  slug: string;
  token: BigNumber;
  tokenType: TokenType;
  name: string;
  image: string,
  hasSoul: boolean,
  tokenAddress: string,
  attributes: any,
  soul: {
    attributes: any[]
    description: string
    external_url: string
    image: string
    name: string
    soulId: number
  }
}


{
  tokenId?: string;
  image: string,
  hasSoul: boolean,
  soul: {
    image: string
    name: string
  }
}

*/
