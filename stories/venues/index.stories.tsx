import { storiesOf } from '@storybook/react'
import React from 'react'
import { EVenuesAction, getVenuesSearchAsync } from 'ts-foursquare'
import { ActionAsync } from '../../src/components/ActionAsync'
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
            <ActionAsync
              actionType={EVenuesAction.GET_VENUES_SEARCH_REQUEST}
              actionAsync={venuesActionsAsync[actionAsyncName]}
              actionPayload={{ query: '' }}
              renderFormPayload={() => <GetVenuesForm />}
            />
          </Layout>
        )
        break
      default:
        return () => null
        break
    }
  })
)
