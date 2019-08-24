import React from 'react'
import { Props } from './index'

export class Life extends React.Component<Props> {
  render() {
    const { life, credentials } = this.props
    return (
      <div>
        <div>
          <h3>Life</h3>
          <code>
            <pre>{JSON.stringify(life)}</pre>
          </code>
        </div>
        <div className="mt-4">
          <h3>Credentials</h3>
          <code>
            <pre>{JSON.stringify(credentials)}</pre>
          </code>
        </div>
      </div>
    )
  }
}
