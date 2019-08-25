import React from 'react'
import ReactJsonView from 'react-json-view'
import { Props } from './index'

export class Life extends React.Component<Props> {
  render() {
    const { life, credentials } = this.props
    return (
      <div>
        <div>
          <h3>Life</h3>
          <ReactJsonView src={life} />
        </div>
        <div className="mt-4">
          <h3>Credentials</h3>
          <ReactJsonView src={credentials} />
        </div>
      </div>
    )
  }
}
