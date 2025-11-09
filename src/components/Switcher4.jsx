import React from 'react'

const Switcher4 = ({ isChecked, onChange }) => {
  return (
    <div className="flex justify-center -mt-1">
      <label className="relative inline-block w-16 h-9 cursor-pointer select-none">
        {/* Hidden checkbox */}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
        />

        {/* Toggle track */}
        <div
          className={`absolute top-2 left-1 right-1 h-6 rounded-full transition-colors duration-300 border ${
            isChecked ? "bg-primary" : "bg-dark"
          }`}
        ></div>

        {/* Toggle knob */}
        <div
          className={`absolute top-2 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
            isChecked ? "translate-x-8" : ""
          }`}
        ></div>
      </label>
    </div>
  )
}

export default Switcher4
