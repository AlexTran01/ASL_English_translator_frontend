import React, { useState } from 'react'

const Switcher4 = ({ isChecked, onChange }) => {

    return (
         <div className="flex justify-end mt-2">
      <label className="relative w-14 h-8 cursor-pointer select-none">
        {/* Hidden checkbox */}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
        />

        {/* Toggle track */}
        <div
          className={`w-full h-full rounded-full transition-colors duration-300 border ${
            isChecked ? "bg-primary" : "bg-dark"
          }`}
        ></div>

        {/* Toggle knob */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
            isChecked ? "translate-x-6" : ""
          }`}
        ></div>
      </label>
    </div>
    )
}

export default Switcher4
