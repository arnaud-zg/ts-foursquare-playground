import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { configureStore, ELifeAction, putCredentials } from 'ts-foursquare'
import { Action } from '..'
import { PutCredentialsForm } from '../../Forms/Life'

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
