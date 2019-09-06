import React from 'react'
import {
  credentialsSelector,
  ELifeAction,
  EVenuesAction,
  lifeSelector,
  venuesSelector,
  statusSelector,
} from 'ts-foursquare'
import { Card, CardContent } from '../Card'
import { Header } from '../Header'
import { ResultState } from './ResultState'

interface Props {
  actionType: string
}

export class Result extends React.Component<Props> {
  render() {
    const { actionType } = this.props
    return (
      <Card>
        <Header title={`Result for ${actionType}`} />
        <CardContent>
          {Object.values(ELifeAction).indexOf(actionType as ELifeAction) !==
            -1 && (
            <ResultState selectors={{ lifeSelector, credentialsSelector }} />
          )}
          {Object.values(EVenuesAction).indexOf(actionType as EVenuesAction) !==
            -1 && <ResultState selectors={{ venuesSelector }} />}
          <ResultState selectors={{ statusSelector }} />
        </CardContent>
      </Card>
    )
  }
}
