import { storiesOf } from '@storybook/react'
import React from 'react'
import { EVenuesAction, getVenuesSearchAsync } from 'ts-foursquare'
import { Action } from '../../src/components/Action'
import { GetVenuesForm } from '../../src/components/Forms'
import { withRedux } from '../../src/hoc/withRedux'
import { Layout } from '../../src/Layout'

const venuesActionsAsync = {
  getVenuesSearchAsync,
}

const venuesStories = storiesOf('2-Module/Venues/Action', module)

Object.keys(venuesActionsAsync).map(actionAsyncName =>
  venuesStories.addDecorator(withRedux).add(actionAsyncName, () => {
    switch (actionAsyncName) {
      case 'getVenuesSearchAsync':
        return (
          <Layout>
            <Action
              action={venuesActionsAsync[actionAsyncName].request}
              actionPayload={{ query: '' }}
              actionType={EVenuesAction.GET_VENUES_SEARCH_REQUEST}
              renderFormPayload={() => <GetVenuesForm />}
            />
          </Layout>
        )
      default:
        return () => null
    }
  })
)
