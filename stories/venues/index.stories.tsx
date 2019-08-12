import { storiesOf } from '@storybook/react'
import React from 'react'
import { EVenuesAction } from 'ts-foursquare'
import Action from '../../src/Action'
import Layout from '../../src/Layout'

const venuesStories = storiesOf('2-Module/Venues/Action', module)

Object.keys(EVenuesAction).map(actionKey => {
  const actionType = EVenuesAction[actionKey as EVenuesAction]

  venuesStories.add(`${actionType}`, () => {
    return (
      <Layout>
        <Action name={actionType} action={() => {}} />
      </Layout>
    )
  })

  return actionKey
})
