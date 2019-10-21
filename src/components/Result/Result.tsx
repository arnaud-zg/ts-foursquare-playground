import React from 'react'
import {
  credentialsSelector,
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
  lifeSelector,
  lifeStatusSelector,
  statusSelector,
  venuesSelector,
} from 'ts-foursquare'
import { getType } from 'typesafe-actions'
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
            getType<string>(getVenuesCategoriesAsync.request),
            getType<string>(getVenuesExploreAsync.request),
            getType<string>(getVenuesLikesAsync.request),
            getType<string>(getVenuesNextVenuesAsync.request),
            getType<string>(getVenuesSearchAsync.request),
            getType<string>(getVenuesSimilarAsync.request),
            getType<string>(getVenuesSuggestCompletionAsync.request),
            getType<string>(getVenuesTrendingAsync.request),
          ].indexOf(actionType) !== -1 && (
            <ResultState selectors={{ venuesSelector }} />
          )}
          <ResultState selectors={{ statusSelector }} />
        </CardContent>
      </Card>
    )
  }
}
