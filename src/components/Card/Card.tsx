import React from 'react'

export class Card extends React.Component {
  render() {
    const { children } = this.props

    return (
      <article className="flex-1 border-b">
        <div className="h-full border-l-2 bg-grey-lightest border-indigo">
          {children}
        </div>
      </article>
    )
  }
}
