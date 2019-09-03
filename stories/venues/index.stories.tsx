import { storiesOf } from '@storybook/react'
import React from 'react'
import { EVenuesAction, getVenuesSearchAsync } from 'ts-foursquare'
import { Action } from '../../src/components/Action'
import { GetVenuesForm } from '../../src/components/Forms'
import { withRedux } from '../../src/hoc/withRedux'
import { Layout } from '../../src/Layout'

const venuesStories = storiesOf('2-Module/Venues/Action', module)

Object.keys(EVenuesAction).map(actionKey => {
  const actionType = EVenuesAction[actionKey as EVenuesAction]

  venuesStories.addDecorator(withRedux).add(`${actionType}`, () => {
    let actionCaller
    let actionPayload
    let renderFormPayload

    switch (actionType) {
      case EVenuesAction.GET_VENUES_SEARCH_REQUEST:
        actionCaller = getVenuesSearchAsync.request
        actionPayload = { query: '' }
        renderFormPayload = () => <GetVenuesForm />
        break
      case EVenuesAction.GET_VENUES_SEARCH_SUCCESS:
        actionCaller = getVenuesSearchAsync.success
        actionPayload = {}
        break
      case EVenuesAction.GET_VENUES_SEARCH_FAILURE:
        actionCaller = getVenuesSearchAsync.failure
        actionPayload = new Error('Error 404')
        break
      case EVenuesAction.GET_VENUES_SEARCH_CANCEL:
        actionCaller = getVenuesSearchAsync.cancel
        actionPayload = 'Action cancelled'
        break
      default:
        break
    }

    return (
      <Layout>
        <Action
          name={actionType}
          actionCaller={actionCaller}
          actionPayload={actionPayload}
          renderFormPayload={renderFormPayload}
        />
      </Layout>
    )
  })

  return actionKey
})
