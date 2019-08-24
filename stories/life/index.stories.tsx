import { storiesOf } from '@storybook/react'
import React from 'react'
import { ELifeAction, getLife, putCredentials } from 'ts-foursquare'
import { Action } from '../../src/components/Action'
import { Layout } from '../../src/Layout'
import { PutCredentialsForm } from '../../src/components/Forms/Life'
import { withRedux } from '../../src/hoc/withRedux'
import { GetLifeForm } from '../../src/components/Forms/Life'

const lifeStories = storiesOf('2-Module/Life/Action', module)

Object.keys(ELifeAction).map(actionKey => {
  const actionType = ELifeAction[actionKey as ELifeAction]

  lifeStories.addDecorator(withRedux).add(`${actionType}`, () => {
    let actionCaller
    let actionPayload
    let formPayload

    switch (actionType) {
      case ELifeAction.RESOLVE_GET_LIFE:
        actionCaller = getLife
        formPayload = <GetLifeForm />
        break
      case ELifeAction.RESOLVE_PUT_CREDENTIALS:
        actionCaller = putCredentials
        actionPayload = { clientId: '', clientSecret: '' }
        formPayload = <PutCredentialsForm />
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
