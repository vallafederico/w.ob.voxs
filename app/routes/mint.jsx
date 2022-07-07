import indexcss from "../styles/index.css";
import { useRef, useEffect, useState } from "react";
import Main from "~/c/sh/Main";
import Section from "~/c/sh/Section.jsx";
import Cont from "~/c/sh/Cont.jsx";
import { ConfirmMintButton } from "~/c/sh/Button.jsx";
import Nav from "~/c/Nav.jsx";
import { getVOXs, getWalletAddress, mint } from "../web3.helpers";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Mint() {
  const mintRef = useRef(null);

  return (
    <>
      <MintUi childRef={mintRef} />
      <Nav isMint={true} />
      <Main canScroll={true}>
        {/* <Section>
          <Cont></Cont>
        </Section>
        <Section>
          <Cont></Cont>
        </Section>
        <Section>
          <Cont></Cont>
        </Section>
        <Section>
          <Cont></Cont>
        </Section> */}
      </Main>
    </>
  );
}

/**
 * Mint UI
 */
export function MintUi({ childRef }) {
  const [nfts, setNfts] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");

  const selectAll = () => {
    setNfts(
      nfts.map((v) => ({
        ...v,
        selected: true,
      }))
    );
  };

  useEffect(() => {
    async function getNfts() {
      const address = await getWalletAddress();
      const vox = await getVOXs(address);
      const nfts = vox.map((v) => ({
        ...v,
        selected: false,
      }));
      setNfts(nfts);
      setWalletAddress(address);
    }

    getNfts();
  }, []);
  return (
    <Section
      childRef={childRef}
      className="MintUi fixed top-0 left-0 w-full h-full py-2 pb-[5vh] pt-[15vh]"
    >
      <Cont className="h-full md:w-[90vw] bg-black text-white rounded-xl md:px-12 px-4 pb-12 text-center flex flex-col ">
        {/* Header */}
        <div className="pb-12 pt-5 flex justify-between uppercase text-sm">
          {/* <p>Mint Your Soul</p>
          <p>IC + Address</p> */}
        </div>
        {/* Body */}
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-[55ch]">
            <h2 className="font-display text-red md:text-5xl text-3xl mb-4">
              Select the VOX you want a soul to be minted for
            </h2>
            <h3 className="text-xs hidden md:block font-thin">
              Every VOX has it’s own soul. All souls are different and unique to
              the VOX they belong to
            </h3>
          </div>
        </div>
        {/* DYNAMIC */}
        <div className="flex flex-col justify-between grow">
          <div className="flex justify-end border-b mt-2">
            <button
              className="text-xs uppercase p-4"
              onClick={() => selectAll()}
            >
              Select All
            </button>
          </div>

          <div className="md:h-[40vh] h-full md:overflow-y-scroll overflow-auto mb-8 p-4 grid md:grid-cols-4 lg:grid-cols-6 gap-8">
            {nfts.map((it, i) => (
              <SoulUi
                key={i}
                index={i}
                content={it}
                onSelectionChange={(selected) => {
                  it.selected = selected;
                  setNfts(
                    nfts.map((v) => ({
                      ...v,
                    }))
                  );
                }}
              />
            ))}
          </div>

          <div>
            <ConfirmMintButton
              text="Mint Selected"
              onClick={async () => {
                mint(nfts, walletAddress);
              }}
            />
          </div>
        </div>
      </Cont>
    </Section>
  );
}

function SoulUi({ content, onSelectionChange }) {
  return (
    <div
      onClick={() => {
        onSelectionChange(!content.selected);
      }}
      className={`relative md:h-[20vh] h-[12vh] ${
        content.selected ? "bg-red" : ""
      } rounded-md flex md:flex-col justify-between flex-row p-6 `}
    >
      <div className="w-1/2 md:w-full">
        <p
          className={`text-xs mt-1 text-red ${
            content.selected ? "text-light" : ""
          }`}
        >
          #{content.tokenId}
        </p>
      </div>
      <div className="absolute top-12 left-8 grid grid-flow-col items-center">
        <img className="h-12 w-12" src={content.soul.image} alt="" />
        <span className="text-black text-[.8em]">{content.soul.name}</span>
      </div>
      <img className="" src={content.image} alt="" />
      <div className="w-1/2 md:w-full">
        <p
          className={`text-xs mt-1 text-red ${
            content.selected ? "text-light" : ""
          }`}
        >
          #{content.name}
        </p>
      </div>
    </div>
  );
}
