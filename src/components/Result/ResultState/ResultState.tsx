import React from 'react'
import ReactJsonView from 'react-json-view'
import { Props } from './index'

export class ResultState extends React.Component<Props> {
  render() {
    const { resultsState } = this.props

    return (
      <div>
        <ReactJsonView src={resultsState} />
      </div>
    )
  }
}
