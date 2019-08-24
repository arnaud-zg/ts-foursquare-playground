import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  EVenuesAction,
  requestGetVenuesSearch,
  resolveGetVenuesSearch,
} from 'ts-foursquare'
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
      case EVenuesAction.REQUEST_GET_VENUES_SEARCH:
        actionCaller = requestGetVenuesSearch
        actionPayload = { query: '' }
        renderFormPayload = () => <GetVenuesForm />
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
          renderFormPayload={renderFormPayload}
        />
      </Layout>
    )
  })

  return actionKey
})
