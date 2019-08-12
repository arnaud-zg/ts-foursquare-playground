import { storiesOf } from '@storybook/react'
import React from 'react'
import { ELifeActionResolve } from 'ts-foursquare'
import Action from '../../src/Action'
import Layout from '../../src/Layout'

const lifeStories = storiesOf('2-Module/Life/Action', module)

Object.keys(ELifeActionResolve).map(actionKey => {
  const actionType = ELifeActionResolve[actionKey as ELifeActionResolve]

  lifeStories.add(`${actionType}`, () => {
    return (
      <Layout>
        <Action name={actionType} action={() => {}} />
      </Layout>
    )
  })

  return actionKey
})
