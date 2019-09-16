import { storiesOf } from '@storybook/react'
import React from 'react'
import { putCredentials } from 'ts-foursquare'
import { Action } from '../../src/components/Action'
import { PutCredentialsForm } from '../../src/components/Forms/Life'
import { withRedux } from '../../src/hoc/withRedux'
import { Layout } from '../../src/Layout'

const lifeStories = storiesOf('2-Module/Life/Action', module)

const lifeActions = {
  putCredentials,
}

Object.keys(lifeActions).map(actionName => {
  switch (actionName) {
    case 'putCredentials':
      lifeStories.addDecorator(withRedux).add(actionName, () => {
        return (
          <Layout>
            <Action
              actionCreator={putCredentials}
              actionPayload={{ clientId: '', clientSecret: '' }}
              renderFormPayload={() => <PutCredentialsForm />}
            />
          </Layout>
        )
      })
      return
    default:
  }
})
