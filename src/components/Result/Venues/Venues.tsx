import React from 'react'
import { Props } from './index'

export class Venues extends React.Component<Props> {
  render() {
    const { venues } = this.props
    return (
      <div>
        <div>
          <h3>Venues</h3>
          <code>
            <pre>{JSON.stringify(venues)}</pre>
          </code>
        </div>
      </div>
    )
  }
}
