import Gl from "./gl";
import { useEffect, useRef, useMemo } from "react";

export default function Canvas({ scrollRef, sliderRef, ctaRef, setCanScroll }) {
  // console.log("rendering GL COMPONENT");

  // ------- Gl - Setup
  const ref = useRef(null);
  const gl = useMemo(() => new Gl(), []);

  // EVENT - loaded
  useEffect(() => {
    if (gl)
      gl.once("loaded", () => {
        // loaded.setLoaded(true);
        console.log("loaded!!! - in gl emitted");
      });
    gl.once("canScroll", () => {
      setCanScroll(true);
      // console.log("canScroll");
    });
  }, [gl]);

  // EVENT - startup
  useEffect(() => {
    if (gl)
      gl.setup({
        canvas: ref.current,
        scrollElement: scrollRef.current,
        ctaElement: ctaRef.current,
        sliderElement: sliderRef.current,
      });
  }, [gl, ref, scrollRef]);

  return <div ref={ref} className="Canvas" />;
}

/**
 
  // ------- Gl - Handle
  useEffect(() => {
    if (gl) gl.updateClicked(clicked); // Clicked Button Index
  }, [gl, clicked]);

  useEffect(() => {
    if (gl) gl.updateSoulIndex(soulIndex); // Soul Index
  }, [gl, soulIndex]);

  
 */
