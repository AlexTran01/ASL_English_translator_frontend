import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styling/App.css'
import LeftComponent from './components/LeftComponent.jsx';
import RightComponent from './components/RightComponet.jsx';
import Demo from './components/Demo.jsx'
import Switcher4 from './components/Switcher4.jsx'
import OptionDropdown from './components/OptionDropdown.jsx'

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

  function handleToggleDemo() {
    setShowDemo(prev => !prev)
  }

  function handleToggleLightMode() {
    setLightMode(prev => !prev)
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

        <div className="flex gap-3">
          {/* Camera toggle */}
          <button className='turn-on-camera-btn' onClick={toggleCamera}>
            Turn {camera_state ? "Off" : "On"} Camera
          </button>

          {/* Light mode toggle button */}
          <button className='turn-on-camera-btn' onClick={handleToggleLightMode}>
            {lightMode ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>

      <div className="main-container">

        <div className="flex">
          <div className="left_box w-1/2 h-100 rounded-lg border border-3">
            <LeftComponent camera_state={camera_state} />
          </div>

          <button className="switch-btn" aria-label="Switch view">
            ⇄
          </button>

          <div className="right_box w-1/2 h-100 rounded-lg border border-3">
            <RightComponent />
          </div>
        </div>

        <OptionDropdown selected={selected} setSelected={setSelected} />

        {showDemo && <Demo />}

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
        </div>

      </div>
    </>
  )
}

export default App;
