import React from 'react'

export class CardContent extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="pl-8 pr-8 pb-5 text-grey-darkest select-none">
        {children}
      </div>
    )
  }
}
