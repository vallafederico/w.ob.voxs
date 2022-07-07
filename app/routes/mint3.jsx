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
        selected: !v.soul,
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
      className="MintUi fixed top-0 left-0 w-full py-2 pb-[5vh] pt-[15vh]"
    >
      <Cont className="bg-black rounded-xl text-center flex flex-col">
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

          <div className="text-white flex flex-col md:flex-row md:flex-wrap gap-4 max-h-[45vh] md:max-h-[55vh] overflow-y-scroll lg:p-3">
            {nfts.map((it, i) => (
              <SoulUi
                key={i}
                index={i}
                content={it}
                onSelectionChange={(selected) => {
                  it.selected = !it.soul && selected;
                  setNfts(
                    nfts.map((v) => ({
                      ...v,
                    }))
                  );
                }}
              />
            ))}
          </div>

          <div className="my-4">
            <ConfirmMintButton
              text="Selected Souls"
              title="Mint Now"
              onClick={async () => {
                mint(
                  nfts.filter((n) => n.selected),
                  walletAddress
                );
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
        console.log("before", content.selected);
        onSelectionChange(!content.selected);
        // console.log("clicked", content.selected);
      }}
      className={`${
        content.selected ? "bg-red" : ""
      } p-4 rounded-lg shrink-0 relative w-2/3 md:w-[40%] lg:w-[30%] xl:w-[20%] 2xl:w-[15%] mx-auto`}
    >
      {/* Vox Info */}
      <div className="">
        <img className="w-full rounded-lg" src={content.image} alt="" />
        <p className={` ${content.selected ? "text-light" : "text-red"}`}>
          #{content.name}
        </p>
        {/* <p className={` ${content.selected ? "text-light" : ""}`}>
          #{content.tokenId}
        </p> */}

        {/* Soul Info */}
        <div className="flex items-center absolute top-4 px-4">
          <img
            className="w-[30px] rounded-lg"
            src={content.soul.image}
            alt=""
          />
          <span className="ml-3 text-xs text-black uppercase">
            {content.soul.name}
          </span>
        </div>
        {/* End Soul Info */}
      </div>
      {/* End Vox Info */}
    </div>
  );
}
