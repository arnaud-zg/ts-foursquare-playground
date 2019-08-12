import React from 'react'

interface IState {}

interface IProps {
  name: string
  action: () => any
}

class Action extends React.Component<IProps, IState> {
  render() {
    const { name, action } = this.props

    return (
      <section className="shadow">
        <article className="border-b">
          <div className="border-l-2 bg-grey-lightest border-indigo">
            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span className="text-indigo font-thin text-xl">
                {`${name} | type: ${typeof action}`}
              </span>
              <div className="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo" />
            </header>
            <div>
              <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                <ul className="pl-4">
                  <li className="pb-2">Coming soon</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>
    )
  }
}

export default Action
