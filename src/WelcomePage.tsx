import React from "react";

type WelcomePageProps = {
  onEnterApp: () => void;
};

const WelcomePage: React.FC<WelcomePageProps> = ({ onEnterApp }) => {
  return (
    <div
      className="min-h-screen text-slate-50 flex items-center justify-center px-6"
      style={{
        // dark black → lighter black vertical gradient
        background:
          "linear-gradient(to bottom, #000000 0%, #050505 40%, #111111 100%)",
      }}
    >
      <div className="max-w-4xl w-full space-y-10">
        {/* Logo + title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/70 border border-purple-500/40">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              Welcome to
            </span>
            <span className="text-sm font-semibold text-purple-100">
              SynSight
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Real-time ASL to English
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-sky-300">
              powered by computer vision
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-base">
            SynSight lets you translate American Sign Language into natural
            English in real time. Designed for accessibility, learning, and
            seamless communication.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-slate-900/70 border border-slate-700/60 p-4 flex flex-col gap-2">
            <span className="text-lg">📷</span>
            <h3 className="text-sm font-semibold text-slate-100">
              Live camera input
            </h3>
            <p className="text-xs text-slate-400">
              Use your webcam to capture ASL gestures and see instant
              translations.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 border border-slate-700/60 p-4 flex flex-col gap-2">
            <span className="text-lg">🧠</span>
            <h3 className="text-sm font-semibold text-slate-100">
              Smart recognition
            </h3>
            <p className="text-xs text-slate-400">
              Behind the scenes, SynSight uses ML models to track hands and
              interpret signs.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 border border-slate-700/60 p-4 flex flex-col gap-2">
            <span className="text-lg">🌐</span>
            <h3 className="text-sm font-semibold text-slate-100">
              Accessible interface
            </h3>
            <p className="text-xs text-slate-400">
              Clean, focused layout tailored for live interaction and demos.
            </p>
          </div>
        </div>

        {/* Call to action with "Enter SynSight" button */}
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

          <p className="text-[11px] md:text-xs text-slate-400 text-center max-w-md">
            Click{" "}
            <span className="font-semibold text-slate-200">
              Enter SynSight
            </span>{" "}
            to go to the main app (<code>App.tsx</code> translator interface).
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
