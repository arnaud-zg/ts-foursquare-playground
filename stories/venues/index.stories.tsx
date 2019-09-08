import { storiesOf } from '@storybook/react'
import React from 'react'
import { getVenuesSearchAsync } from 'ts-foursquare'
import { Action } from '../../src/components/Action'
import {
  GetVenuesByQueryForm,
  GetVenuesByPlaceGeocode,
} from '../../src/components/Forms'
import { withRedux } from '../../src/hoc/withRedux'
import { Layout } from '../../src/Layout'

const venuesActionsAsync = {
  getVenuesSearchAsync,
}

Object.keys(venuesActionsAsync).forEach(actionAsyncName => {
  const venuesStories = storiesOf(
    `2-Module/Venues/Action/${actionAsyncName}`,
    module
  )

  switch (actionAsyncName) {
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
  }
})
