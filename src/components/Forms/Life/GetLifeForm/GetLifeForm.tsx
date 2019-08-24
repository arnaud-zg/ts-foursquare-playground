import React from 'react'
import { Props } from './GetLifeForm.container'

export class GetLifeForm extends React.Component<Props> {
  render() {
    const { getLife } = this.props

    return (
      <div>
        <button
          className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          onClick={getLife}
        >
          <span className="mr-2">Send</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentcolor"
              d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
            />
          </svg>
        </button>
      </div>
    )
  }
}
