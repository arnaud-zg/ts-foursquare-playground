import React from 'react'
import {
  credentialsSelector,
  lifeSelector,
  lifeStatusSelector,
  statusSelector,
  venuesSelector,
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
          {['PUT_CREDENTIALS'].indexOf(actionType) !== -1 && (
            <ResultState
              selectors={{
                lifeStatusSelector,
                lifeSelector,
                credentialsSelector,
              }}
            />
          )}
          {[
            'GET_VENUES_CATEGORIES_REQUEST',
            'GET_VENUES_EXPLORE_REQUEST',
            'GET_VENUES_LIKES_REQUEST',
            'GET_VENUES_SEARCH_REQUEST',
            'GET_VENUES_SUGGEST_COMPLETION_REQUEST',
            'GET_VENUES_TRENDING_REQUEST',
          ].indexOf(actionType) !== -1 && (
            <ResultState selectors={{ venuesSelector }} />
          )}
          <ResultState selectors={{ statusSelector }} />
        </CardContent>
      </Card>
    )
  }
}
