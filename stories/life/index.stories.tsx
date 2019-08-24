import { storiesOf } from '@storybook/react'
import React from 'react'
import { ELifeAction, getLife, putCredentials } from 'ts-foursquare'
import { Action } from '../../src/components/Action'
import {
  GetLifeForm,
  PutCredentialsForm,
} from '../../src/components/Forms/Life'
import { withRedux } from '../../src/hoc/withRedux'
import { Layout } from '../../src/Layout'

const lifeStories = storiesOf('2-Module/Life/Action', module)

Object.keys(ELifeAction).map(actionKey => {
  const actionType = ELifeAction[actionKey as ELifeAction]

  lifeStories.addDecorator(withRedux).add(`${actionType}`, () => {
    let actionCaller
    let actionPayload
    let renderFormPayload

    switch (actionType) {
      case ELifeAction.RESOLVE_GET_LIFE:
        actionCaller = getLife
        renderFormPayload = () => <GetLifeForm />
        break
      case ELifeAction.RESOLVE_PUT_CREDENTIALS:
        actionCaller = putCredentials
        actionPayload = { clientId: '', clientSecret: '' }
        renderFormPayload = () => <PutCredentialsForm />
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
