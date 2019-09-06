import React from 'react'
import { i18n } from '../../constants/i18n'

export const Header = () => (
  <div className="bg-gray-400 w-full p-2">
    <div className="container mx-auto rounded-t m-2">
      <div className="text-center text-black">
        <h1 className="font-sans font-thin">{i18n.HEADER_TITLE}</h1>
        {/* <h2 className="font-thin text-sm tracking-wide mt-2 mb-2">
            If you want to test some endpoints, you must put your token access
          </h2>

          <input
            className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            placeholder="Put your token"
          /> */}
      </div>
    </div>
  </div>
)
