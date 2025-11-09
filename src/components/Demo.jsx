import React, { useEffect, useRef } from "react";
import bgImage from "../assets/Gemini_Generated_Image_ef8v4ref8v4ref8v.png";
import fgImage from "../assets/Background-Removed.png";
import RightComponent from "./RightComponet.jsx";

export default function Demo(props) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const box = overlayRef.current;
    if (!box) return;

    let frameId;
    const speed = 0.5; // pixels per frame-ish

    const step = () => {
      const maxScroll = box.scrollHeight - box.clientHeight;

      if (maxScroll <= 0) {
        // no overflow yet → stay at top but keep checking as new words come in
        box.scrollTop = 0;
      } else {
        box.scrollTop += speed;

        // loop back to top when we hit the bottom
        if (box.scrollTop >= maxScroll) {
          box.scrollTop = 0;
        }
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);


  return (
    <div
      className="demo-container w-full h-100 border mx-auto block mt-6 bg-cover bg-center rounded-lg border border-3 relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background person image */}
      <img
        src={fgImage}
        alt="foreground"
        className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-56"
        style={{ transform: "scale(1.45)" }}
      />

      {/* Overlay with auto-scrolling text */}
      <div className="demo-overlay">
        <div className="demo-overlay-box" ref={overlayRef}>
          <RightComponent output={props.output} />
        </div>
      </div>
    </div>
  );
}
