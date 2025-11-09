import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function OptionDropdown({ selected, setSelected }) {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton
        className="translation-option-btn inline-flex items-center gap-x-1.5"
      >
        {selected}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-4 text-gray-100"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-64 origin-top-left rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <div
              className="cursor-pointer block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
              onClick={() =>
                setSelected("Letter Level-Trained AI model")
              }
            >
              Letter Level-Trained AI model
            </div>
          </MenuItem>
          <MenuItem>
            <div
              className="cursor-pointer block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
              onClick={() =>
                setSelected("Word Level-Trained AI model")
              }
            >
              Word Level-Trained AI model
            </div>
          </MenuItem>
          <MenuItem>
            <div
              className="cursor-pointer block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
              onClick={() =>
                setSelected("World Level-Google Gemini")
              }
            >
              World Level-Google Gemini
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
