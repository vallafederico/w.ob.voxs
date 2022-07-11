import indexcss from "../styles/index.css";
import {useRef, useEffect, useState} from "react";
import Main from "~/c/sh/Main";
import Section from "~/c/sh/Section.jsx";
import Cont from "~/c/sh/Cont.jsx";
import {ConfirmMintButton} from "~/c/sh/Button.jsx";
import Nav from "~/c/Nav.jsx";
import {
  getCollection,
  mint,
  setPending, setupPendingPolling, watchForWallet,
} from "../web3.helpers";

export const links = () => [{rel: "stylesheet", href: indexcss}];

export default function Mint() {
  const mintRef = useRef(null);

  return (
    <>
      <MintUi childRef={mintRef} />
      <Nav isMint={true} isAbout={true} />
      <Main canScroll={true}>
      </Main>
    </>
  );
}

/**
 * Mint UI
 */
export function MintUi({childRef}) {
  const [nfts, setNfts] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [showLoading, setShowLoading] = useState(true);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showWalletNotConnected, setShowWalletNotConnected] = useState(false);
  const [timeoutHandle, setTimeoutHandle] = useState(undefined);

  const selectAll = () => {
    setNfts(
      nfts.map((v) => ({
        ...v,
        selected: !v.soul?.name && !v.pending,
      }))
    );
  };

  useEffect(() => {
    async function getNfts() {
      try {
        const { address, nfts } = await getCollection();

        console.log('nfts', nfts)
        setNfts(nfts);
        setWalletAddress(address);
        setTimeoutHandle(setupPendingPolling(nfts, (nfts) => {
          setNfts(nfts);
        }))
      } catch (e) {
        watchForWallet((nfts) => {
          setShowWalletNotConnected(false);
          setNfts(nfts);
        });
        setShowWalletNotConnected(true);
        console.log(e)
      }
      setShowLoading(false);
    }

    getNfts();

    return () => {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
    }
  }, []);
  return (
    <>
      <Section
        childRef={childRef}
        className="MintUi fixed top-0 left-0 w-full h-full py-2 pb-[5vh] pt-[15vh]"
      >
        {!showWalletNotConnected ?
          <Cont
            className="h-full md:w-[90vw] bg-black text-white rounded-xl md:px-12 px-4 pb-12 text-center flex flex-col ">
            {/* Body */}
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-[55ch]">
                <h2 className="font-display text-red md:text-5xl text-3xl mb-4">
                  Select the VOX you want to mint a Soul for.
                </h2>
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

              <div
                className="h-[40vh] overflow-y-scroll mb-8 p-4 flex flex-wrap w-full">
                {nfts.map((it, i) => (
                  <SoulUi
                    key={i}
                    index={i}
                    content={it}
                    onSelectionChange={(selected) => {
                      it.selected = !it.soul?.name && !it.pending && selected;
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
                    const selected = nfts.filter((n) => n.selected);
                    await mint(selected, walletAddress);
                    await setPending(selected, walletAddress);
                    setShowConfirmDialog(true);
                    setTimeoutHandle(setupPendingPolling(nfts, (nfts) => {
                      setNfts(nfts);
                    }));
                  }}
                />
              </div>
            </div>
          </Cont>
          :
          <Cont
            className="h-full md:w-[90vw] bg-black text-white rounded-xl md:px-12 px-4 pb-12 text-center flex flex-col grid justify-center place-content-center ">
            <h1 className="text-5xl">Please Connect Your Wallet</h1>
          </Cont>
        }

      </Section>

      {showLoading ? (
        <div
          className="h-screen w-screen backdrop-brightness-50 fixed left-0 top-0 grid justify-center place-items-center">
          <div className="bg-white p-12 uppercase rounded-2xl font-display drop-shadow-md grid justify-center">
            <h1 className="text-2xl">Loading...</h1>

          </div>
        </div>
      ) : null}

      {showConfirmDialog ? (
        <div
          className="h-screen w-screen backdrop-brightness-50 fixed left-0 top-0 grid justify-center place-items-center">
          <div className="bg-white p-12 rounded-2xl drop-shadow-md grid justify-center max-w-xl">
            <h1 className="text-2xl text-center font-display  uppercase">mint request successful</h1>
            <h4 className="mt-4">
              Pending indicators will only be visible in this browser. When minting is complete they will disappear.
            </h4>
            <button type="button"
                    className="bg-red text-white pt-4 pb-3 md:px-14 mt-8 px-8 sm:px-2 rounded-lg tx-display uppercase font-display md:text-[1.2em] sm:text-[1em] text-[.8em] leading-[.8em]"
                    onClick={() => setShowConfirmDialog(false)}
            >
              ok
            </button>
          </div>
        </div>
      ) : null}

    </>
  );
}

function SoulUi({content, onSelectionChange}) {
  return (
    <div
      onClick={() => {
        onSelectionChange(!content.selected);
      }}
      className={`relative h-[250px] w-[220px] mb-8 mx-2 ${
        content.selected || content.pending ? "bg-red" : ""
      } flex flex-col justify-between flex-row p-6`}
    >
      <div className="w-full">
        <p
          className={`text-xs mt-1 text-red ${
            content.selected || content.pending ? "text-light" : ""
          }`}
        >
          #{content.tokenId}
        </p>
      </div>
      {content?.soul?.name ? (<div className="absolute top-[40px] left-8 grid grid-flow-col items-center">
        <img className="h-12 w-12" src={content.soul.image} alt="" />
        <span className="text-black text-[.8em]">{content.soul.name}</span>
      </div>) : null}
      <div className="rounded-2xl overflow-hidden">
        <img className="" src={content.image} alt="" />
      </div>
      <div className="w-full">
        <p
          className={`text-xs mt-1 text-red ${
            content.selected || content.pending ? "text-light" : ""
          }`}
        >
          {content.name}
        </p>
        {content.pending ? (
          <div className="absolute top-0 left-0 h-full w-full backdrop-brightness-50">
            <div
              className="absolute top-28 left-10 mx-4 bg-white text-black p-8 h-8 uppercase rounded-2xl font-display drop-shadow-md grid place-content-center">
              pending
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
