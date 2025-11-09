import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styling/App.css'
import LeftComponent from './components/LeftComponent.jsx';
import RightComponent from './components/RightComponet.jsx';
import Demo from './components/Demo.jsx'
import Switcher4 from './components/Switcher4.jsx'


function App() {

  const [camera_state, set_camera_state] = useState(false)
  const [navOpen, setNavOpen] = useState(false)   // <-- NEW]

    const toggleNav = () => {
    setNavOpen(prev => !prev);
  };

  const demo = false

  function toggleCamera() {
    set_camera_state(prev => !prev)
  }

  function toggleNavIcon() {                      // <-- NEW
    setNavOpen(prev => !prev)
  }

  function showGlasses(){
    
  }

  return (
    <>
      <div className="navbar border-b-2 w-full h-20 flex flex-row items-center justify-between px-4">
        <div className='project-name text-5xl'>
          SynSight
        </div>

        <button className='turn-on-camera-btn' onClick={toggleCamera}>
          turn {camera_state ? "off" : "on"} camera
        </button>
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
      <Demo />
<div className={`burger-wrapper ${navOpen ? 'open' : ''}`}>
        <button
          id="nav-icon3"
          className={navOpen ? 'open' : ''}
          onClick={toggleNav}
          type="button"
          aria-label="Toggle SynSight power"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="onoff-container">
          <button className="on_off-btn" type="button">
            <Switcher4 />
          </button>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
