import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styling/App.css'
import LeftComponent from './components/LeftComponent.jsx';
import RightComponent from './components/RightComponet.jsx';


function App() {

  const [camera_state, set_camera_state] = useState(false)

  function toggleCamera() {
    if (camera_state)
      set_camera_state(false)
    else
      set_camera_state(true)
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

        <h1 className='text-3xl font-bold text-white-300 text-center'>Welcome to SynSight</h1>

        <div className="flex">
          <div className="w-1/2 h-100 rounded-lg border border-3">
            <LeftComponent camera_state={camera_state} />
          </div>
          <div className="w-1/2 h-100 rounded-lg border border-3">
            <RightComponent />
          </div>
        </div>

        <button className="show-demo-button">
          Show Demo!
        </button>
      </div>
    </>

  )
}

export default App
