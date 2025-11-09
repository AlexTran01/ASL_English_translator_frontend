import React, { useEffect, useRef } from "react";
import bgImage from "../assets/Gemini_Generated_Image_ef8v4ref8v4ref8v.png";
import fgImage from "../assets/Background-Removed.png";
import RightComponent from "./RightComponet.jsx";

export default function Demo(props) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const box = overlayRef.current;
    if (!box) return;

    const hasOverflow = box.scrollHeight > box.clientHeight;
    if (!hasOverflow) return; // nothing to scroll → do nothing

    let frameId;
    let direction = 1;        // 1 = down, -1 = up
    const speed = 0.8;        // 🔥 increase this if it still feels slow

    const step = () => {
      const maxScroll = box.scrollHeight - box.clientHeight;

      // if it stopped overflowing for some reason, bail out
      if (maxScroll <= 0) return;

      box.scrollTop += direction * speed;

      // bounce at top/bottom
      if (box.scrollTop <= 0) {
        box.scrollTop = 0;
        direction = 1;
      } else if (box.scrollTop >= maxScroll) {
        box.scrollTop = maxScroll;
        direction = -1;
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

      {/* Overlay with auto-scrolling RightComponent */}
      <div className="demo-overlay">
        <div className="demo-overlay-box" ref={overlayRef}>
          <RightComponent />
        </div>
      </div>
    </div>
  );
}
