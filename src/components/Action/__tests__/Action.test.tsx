import React from 'react'
import renderer from 'react-test-renderer'
import { Action } from '..'
import { ELifeAction, putCredentials, configureStore } from 'ts-foursquare'
import { PutCredentialsForm } from '../../Forms/Life'
import { Provider } from 'react-redux'

const store = configureStore()

describe('Component/Action', () => {
  it('renders correctly', () => {
    const props = {
      name: ELifeAction.RESOLVE_PUT_CREDENTIALS,
      actionCaller: putCredentials,
      actionPayload: { clientId: '', clientSecret: '' },
      renderFormPayload: () => <PutCredentialsForm />,
    }
    const tree = renderer
      .create(
        <Provider store={store}>
          <Action {...props} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
