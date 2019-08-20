import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  EVenuesAction,
  requestGetVenuesSearch,
  resolveGetVenuesSearch,
} from 'ts-foursquare'
import Action from '../../src/Action'
import Layout from '../../src/Layout'

const venuesStories = storiesOf('2-Module/Venues/Action', module)

Object.keys(EVenuesAction).map(actionKey => {
  const actionType = EVenuesAction[actionKey as EVenuesAction]

  venuesStories.add(`${actionType}`, () => {
    let actionCaller
    let actionPayload

    switch (actionType) {
      case EVenuesAction.REQUEST_GET_VENUES_SEARCH:
        actionCaller = requestGetVenuesSearch
        actionPayload = { query: '' }
        break
      case EVenuesAction.RESOLVE_GET_VENUES_SEARCH:
        actionCaller = resolveGetVenuesSearch
        actionPayload = {}
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
        />
      </Layout>
    )
  })

  return actionKey
})
