import { useEffect, useState, useMemo, useRef } from "react";
import { Svg } from "./sh/Svg";
import { Howl } from "howler";
import track from "~/src/vox-song-0.mp3";

export default function Sound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundBars = useRef(null);

  const soundLoop = useMemo(
    () =>
      new Howl({
        src: [track],
        loop: 1,
        volume: 0.3,
      }),
    []
  );

  useEffect(() => {
    if (isPlaying) {
      soundLoop.play();
    } else {
      soundLoop.pause();
    }
  }, [isPlaying, soundLoop]);

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="UiCtrl fixed right-2 bottom-2 opacity-70"
    >
      <SoundIcon
        isPlaying={isPlaying}
        childRef={soundBars}
        className="md:w-[40px] w-[40px]"
      />
    </button>
  );
}

function SoundIcon({ className, isPlaying }) {
  return (
    <Svg
      className={`Icon fill-white bg-black rounded-full p-2 Sound ${className}`}
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 28.5 28.5"
        xmlSpace="preserve"
      >
        <g id="Group_445" transform="translate(-6543.762 15810.522)">
          <path d="M6558.5-15803.7c-.6-.3-1.4-.2-1.9.3l-3.5 3c-.1.1-.3.2-.4.2h-3.2c-1 0-1.8.8-1.8 1.8v4.6c0 1 .8 1.8 1.8 1.8h3.2c.2 0 .3.1.4.2l3.5 3c.3.3.7.4 1.1.4.3 0 .5-.1.7-.2.6-.3 1-.9 1-1.6v-11.7c.1-.9-.3-1.6-.9-1.8z" />
          <g
            className={
              isPlaying
                ? " scale-y-100 transition-transform"
                : "scale-y-0 transition-transform"
            }
          >
            <path d="M6561.6-15799.3c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1c1.1 1.1 1.1 2.9 0 4-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 1.7-1.8 1.7-4.5 0-6.2z" />
            <path d="M6567.6-15800c-.5-1.2-1.2-2.3-2.1-3.2-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1c3.2 3.2 3.2 8.4 0 11.7-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 2.7-2.9 3.5-7 2.1-10.7z" />
            <path d="M6563.5-15801.3c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1c2.2 2.2 2.2 5.7 0 7.8-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 2.8-2.8 2.8-7.2 0-10z" />
          </g>
        </g>
      </svg>
    </Svg>
  );
}
