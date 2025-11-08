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
  
  const demo = false


  function toggleCamera() {
    if (camera_state)
      set_camera_state(false)
    else
      set_camera_state(true)
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

<<<<<<< HEAD
        <h1 className='text-3xl font-bold text-white-300 text-center mb-4'>Welcome to SynSight</h1>

        <div className="flex gap-6">
          <div className="w-1/2 h-100 rounded-lg border border-3">
=======
        <div className="flex">
          <div className="left_box w-1/2 h-100 rounded-lg border border-3">
>>>>>>> d1e8e44e473d24356e517770fcee02f40a57f217
            <LeftComponent camera_state={camera_state} />
          </div>
          <div className="right_box w-1/2 h-100 rounded-lg border border-3">
            <RightComponent />
          </div>
        </div>
        
        <Switcher4/>

        <Demo/>

      </div>
    </>

  )
}

export default App
