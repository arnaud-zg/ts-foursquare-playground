import React, { Fragment } from 'react'
import ReactJsonView from 'react-json-view'
import { Props } from './index'

export class ResultState extends React.Component<Props> {
  render() {
    const { resultsState } = this.props
    return (
      <Fragment>
        {!!resultsState &&
          Object.keys(resultsState).map((selectorName: string) => (
            <ReactJsonView
              key={selectorName}
              src={{ [selectorName]: resultsState[selectorName] }}
            />
          ))}
      </Fragment>
    )
  }
}
