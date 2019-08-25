import React from 'react'
import ReactJsonView from 'react-json-view'
import { Props } from './index'

export class Venues extends React.Component<Props> {
  render() {
    const { venues } = this.props
    return (
      <div>
        <div>
          <h3>Venues</h3>
          <ReactJsonView src={venues} />
        </div>
      </div>
    )
  }
}
