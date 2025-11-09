import React, { useState } from "react";
import Switcher4 from "./components/Switcher4.jsx";

type WelcomePageProps = {
  onEnterApp: () => void;
};

type FeatureId = "camera" | "ai" | "ui";

const WelcomePage: React.FC<WelcomePageProps> = ({ onEnterApp }) => {
  const [activeFeature, setActiveFeature] = useState<FeatureId | null>("camera");
  const [lightMode, setLightMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const features: {
    id: FeatureId;
    icon: string;
    title: string;
    short: string;
    long: string;
  }[] = [
    {
      id: "camera",
      icon: "📷",
      title: "Live camera input",
      short:
        "Use your webcam to capture ASL gestures and see instant translations.",
      long:
        "SynSight tracks your hands and upper body in real time, so you can sign naturally without worrying about exact poses. The camera view is optimized for clarity and low latency.",
    },
    {
      id: "ai",
      icon: "🧠",
      title: "Smart recognition",
      short: "ML models track your hands and interpret signs on the fly.",
      long:
        "Vision, sequence, and language models work together to turn motion into meaning, handling continuous signing instead of isolated signs so your sentences feel fluid and expressive.",
    },
    {
      id: "ui",
      icon: "🌐",
      title: "Accessible interface",
      short: "Clean, focused layout tailored for live interaction and demos.",
      long:
        "The interface is built for readability and low distraction, making it easy to run demos, study, or have real conversations without getting lost in controls or clutter.",
    },
  ];

  const someActive = activeFeature !== null;

  const handleToggleLightMode = () => {
    setLightMode((prev) => !prev);
  };

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const bgGradient = lightMode
    ? "linear-gradient(to bottom, #f9fafb 0%, #e5e7eb 40%, #d1d5db 100%)"
    : "linear-gradient(to bottom, #000000 0%, #050505 40%, #111111 100%)";

  const textRootClass = lightMode ? "text-slate-900" : "text-slate-50";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 ${textRootClass}`}
      style={{
        background: bgGradient,
      }}
    >
      <div className="max-w-4xl w-full space-y-10">
        {/* Logo + title */}
        <div className="text-center space-y-4">
          <div
            className={[
              "inline-flex items-center gap-3 px-4 py-2 rounded-full border",
              lightMode
                ? "bg-white/80 border-purple-300/60"
                : "bg-slate-900/70 border-purple-500/40",
            ].join(" ")}
          >
            <span
              className={[
                "text-xs font-semibold uppercase tracking-[0.2em]",
                lightMode ? "text-purple-600" : "text-purple-300",
              ].join(" ")}
            >
              Welcome to
            </span>
            <span
              className={[
                "text-sm font-semibold",
                lightMode ? "text-slate-900" : "text-purple-100",
              ].join(" ")}
            >
              SynSight
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Real-time ASL to English
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-sky-300">
              powered by computer vision
            </span>
          </h1>
        </div>

        {/* Feature grid – interactive cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature) => {
            const isActive = activeFeature === feature.id;

            const emphasisClasses = someActive
              ? isActive
                ? "scale-110 opacity-100 ring-2 ring-purple-400/80 shadow-lg shadow-purple-900/50"
                : "scale-85 opacity-60"
              : "scale-100 opacity-100";

            const cardBase = lightMode
              ? "bg-white/80 border-slate-200 hover:bg-white"
              : "bg-slate-900/70 border-slate-700/60 hover:bg-slate-900/90";

            const titleColor = lightMode ? "text-slate-900" : "text-slate-100";
            const shortColor = lightMode ? "text-slate-600" : "text-slate-300";
            const longColor = lightMode ? "text-slate-700" : "text-slate-200";

            return (
              <button
                key={feature.id}
                type="button"
                onClick={() =>
                  setActiveFeature((prev) =>
                    prev === feature.id ? null : feature.id
                  )
                }
                className={[
                  "rounded-xl border p-4 flex flex-col text-left",
                  cardBase,
                  "transition-all duration-300 ease-out transform",
                  "hover:translate-y-[-2px]",
                  emphasisClasses,
                ].join(" ")}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xl">{feature.icon}</span>
                  <h3 className={`text-base font-semibold ${titleColor}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${shortColor}`}>{feature.short}</p>
                </div>

                {/* Expanding text box with "opening" animation */}
                <div
                  className={[
                    `mt-2 text-sm ${longColor} transition-all duration-300 ease-out overflow-hidden`,
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <p>{feature.long}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={onEnterApp}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-slate-50 font-semibold text-sm md:text-base shadow-lg shadow-purple-900/60 hover:shadow-xl hover:scale-[1.02] active:scale-100 transition-all"
            style={{
              background:
                "linear-gradient(to right, #471396 0%, #621DB0 25%, #7C27CA 50%, #9631E5 75%, #B13BFF 100%)",
            }}
          >
            <span className="text-lg">🏠</span>
            <span>Enter SynSight</span>
          </button>
        </div>
      </div>

      {/* Floating burger menu – only Light Mode option */}
      <div className={`fab-wrapper ${navOpen ? "open" : ""}`}>
        {/* Pop-out menu: just light mode toggle */}
        <div className="fab-menu">
          <button
            className="fab-btn on_off-btn"
            type="button"
            aria-label="Toggle light mode"
          >
            <Switcher4
              isChecked={lightMode}
              onChange={handleToggleLightMode}
            />
          </button>
        </div>

        {/* Burger button itself */}
        <button
          id="nav-icon3"
          className={navOpen ? "open" : ""}
          onClick={toggleNav}
          type="button"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
