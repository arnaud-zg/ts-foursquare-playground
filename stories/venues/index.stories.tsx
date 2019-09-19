import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
} from 'ts-foursquare'
import { Action } from '../../src/components/Action'
import {
  GetVenuesByPlaceGeocode,
  GetVenuesByQueryForm,
} from '../../src/components/Forms'
import { withRedux } from '../../src/hoc/withRedux'
import { Layout } from '../../src/Layout'

const venuesActionsAsync = {
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
}

Object.keys(venuesActionsAsync).forEach(actionAsyncName => {
  const venuesStories = storiesOf(
    `2-Module/Venues/Action/${actionAsyncName}`,
    module
  )

  switch (actionAsyncName) {
    case 'getVenuesExploreAsync':
      venuesStories
        .addDecorator(withRedux)
        .add('Get venues explore by location', () => {
          const initialValues = { ll: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
              />
            </Layout>
          )
        })
        .add('Get venues explore by place', () => {
          const initialValues = { near: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
              />
            </Layout>
          )
        })
      break
    case 'getVenuesSearchAsync':
      venuesStories
        .addDecorator(withRedux)
        .add('Get venues search by query', () => {
          const initialValues = { query: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
                renderFormPayload={() => (
                  <GetVenuesByQueryForm initialValues={initialValues} />
                )}
              />
            </Layout>
          )
        })
        .add('Get venues search by place', () => {
          const initialValues = { near: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
                renderFormPayload={() => (
                  <GetVenuesByPlaceGeocode initialValues={initialValues} />
                )}
              />
            </Layout>
          )
        })
      break
    case 'getVenuesTrendingAsync':
      venuesStories
        .addDecorator(withRedux)
        .add('Get venues trending by location', () => {
          const initialValues = { ll: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
              />
            </Layout>
          )
        })
        .add('Get venues trending by place', () => {
          const initialValues = { near: '' }

          return (
            <Layout>
              <Action
                actionCreator={venuesActionsAsync[actionAsyncName].request}
                actionPayload={initialValues}
              />
            </Layout>
          )
        })
      break
    default:
      break
  }
})
