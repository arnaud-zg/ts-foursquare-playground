import React from 'react'

interface IProps {
  title: string
}

export class Header extends React.Component<IProps> {
  render() {
    const { title } = this.props
    return (
      <header className="flex justify-between items-center p-2 pl-4 pr-4 cursor-pointer select-none">
        <span className="text-indigo font-thin text-xl">{title}</span>
      </header>
    )
  }
}
