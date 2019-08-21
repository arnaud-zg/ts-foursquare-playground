import { storiesOf } from '@storybook/react'
import React from 'react'
import { ELifeAction, getLife, putCredentials } from 'ts-foursquare'
import { Action } from '../../src/Action'
import { Layout } from '../../src/Layout'
import { PutCredentialsForm } from '../../src/Forms/Life/PutCredentialsForm'

const lifeStories = storiesOf('2-Module/Life/Action', module)

Object.keys(ELifeAction).map(actionKey => {
  const actionType = ELifeAction[actionKey as ELifeAction]

  lifeStories.add(`${actionType}`, () => {
    let actionCaller
    let actionPayload
    let formPayload

    switch (actionType) {
      case ELifeAction.RESOLVE_GET_LIFE:
        actionCaller = getLife
        break
      case ELifeAction.RESOLVE_PUT_CREDENTIALS:
        actionCaller = putCredentials
        actionPayload = { clientId: '', clientSecret: '' }
        formPayload = (
          <PutCredentialsForm
            onSubmit={values => {
              console.log(values)
            }}
          />
        )
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
          formPayload={formPayload}
        />
      </Layout>
    )
  })

  return actionKey
})
