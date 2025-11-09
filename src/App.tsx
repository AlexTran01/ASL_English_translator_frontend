import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styling/App.css'
import LeftComponent from './components/LeftComponent.jsx';
import RightComponent from './components/RightComponet.jsx';
import Demo from './components/Demo.jsx'
import Switcher4 from './components/Switcher4.jsx'
import OptionDropdown from './components/OptionDropdown.jsx'
import { Camera, CameraOff, Sun, Moon, Disc2 ,  } from "lucide-react";



// 👇 add this import for your logo
import synsightLogo from './assets/ChatGPT Image Nov 9, 2025, 02_49_32 AM.png'

type AppProps = {
  onGoHome?: () => void;
};

function App({ onGoHome }: AppProps) {

  const [camera_state, set_camera_state] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const [selected, setSelected] = useState("Translation Option")
  const [translate, setTranslate] = useState(false)
  const [output, setOutput] = useState("")
  const [lightMode, setLightMode] = useState(false)

  // apply/remove light-mode class on <body>
  useEffect(() => {
    const body = document.body
    if (lightMode) {
      body.classList.add('light-mode')
    } else {
      body.classList.remove('light-mode')
    }
  }, [lightMode])

  const toggleNav = () => {
    setNavOpen(prev => !prev);
  };

  function toggleCamera() {
    set_camera_state(prev => !prev)

  }

  function toggleTranslate() {
    setTranslate(prev => !prev)
  }

  function handleToggleDemo() {
    setShowDemo(prev => !prev)
  }

  function handleToggleLightMode() {
    setLightMode(prev => !prev)
  }

  function clearOutput() {
    setOutput("")
  }

  return (
    <>
      <div className="navbar border-b-2 w-full h-20 flex flex-row items-center justify-between px-4">
        {/* 👇 logo + title */}
        <div className="flex items-center gap-3">
          <img
            src={synsightLogo}
            alt="SynSight logo"
            className="h-18 w-18 object-contain"
          />
          <div className="project-name text-5xl">
            SynSight
          </div>
        </div>

        {/* Center (perfectly centered) */}
  <div className="absolute left-1/2 -translate-x-1/2">
    <OptionDropdown selected={selected} setSelected={setSelected} />
  </div>


        <div className="flex items-center gap-3">

          {output && (<button className='clear-output-btn' onClick={clearOutput}>
            clear
          </button>
          )}

          {camera_state && (
            <button
              onClick={toggleTranslate}
              className={`p-3 rounded-full transition-all ${translate
                  ? 'camera-on-gradient text-white' // same background as camera when ON
                  : !lightMode
                    ? 'bg-gray-700 text-gray-400'
                    : 'bg-gray-300 text-gray-600'
                }`}
              aria-label={translate ? "Stop translating" : "Start translating"}
            >
              {translate ? (
                // ON: red disc, camera-style gradient background
                <Disc2 className="w-5 h-5 text-red-700" />
              ) : (
                // OFF: grey disc, grey background
                <Disc2 className="w-5 h-5" />
              )}
            </button>

          )}

          

          {/* Camera widget */}
          <button
            onClick={toggleCamera}
            className={`p-3 rounded-full transition-all ${camera_state
              ? 'camera-on-gradient text-white'
              : !lightMode
                ? 'bg-gray-700 text-gray-400'
                : 'bg-gray-300 text-gray-600'
              }`}
          >
            {camera_state ? (
              <Camera className="w-5 h-5" />
            ) : (
              <CameraOff className="w-5 h-5" />
            )}
          </button>


          {/* Dark/light mode widget */}
          <button
            onClick={handleToggleLightMode}
            className="theme-toggle-btn"
            aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
          >
            {lightMode ? (
              <Moon className="w-5 h-5 text-white" />
            ) : (
              <Sun className="w-5 h-5 text-white" />
            )}
          </button>

        </div>

      </div>

      {/* <div className="mt-4 flex justify-center relative h-16">
        <div className="absolute top-6">
          <OptionDropdown selected={selected} setSelected={setSelected} />
        </div>
      </div> */}


      <div className="main-container mt-20">

        <div className="flex gap-6">
          <div className="left_box w-1/2 h-100 rounded-lg border border-3">
            <LeftComponent camera_state={camera_state} selected={selected} translate={translate} setTranslate={setTranslate} setOutput={setOutput} />
          </div>

          <button className="switch-btn" aria-label="Switch view">
            ⇄
          </button>

          <div className="right_box w-1/2 h-100 rounded-lg border border-3">
            <RightComponent output={output} />
          </div>

        </div>

        {showDemo && <Demo output={output} />}

        {/* Floating burger with Home + demo switch inside */}
        <div className={`fab-wrapper ${navOpen ? 'open' : ''}`}>
          <div className="fab-menu">
            {/* Home button */}
            <button
              className="fab-btn home-btn"
              type="button"
              aria-label="Go home"
              onClick={() => {
                if (onGoHome) onGoHome();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              🏠
            </button>

            {/* Demo ON/OFF */}
            <button className="fab-btn on_off-btn" type="button">
              <Switcher4 isChecked={showDemo} onChange={handleToggleDemo} />
            </button>
          </div>

          {/* Burger button itself */}
          <button
            id="nav-icon3"
            className={navOpen ? 'open' : ''}
            onClick={toggleNav}
            type="button"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="onoff-container">
            <button className="on_off-btn" type="button">
              <Switcher4 isChecked={showDemo} onChange={handleToggleDemo} />
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App;
