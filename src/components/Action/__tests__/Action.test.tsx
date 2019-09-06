import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import {
  configureStore,
  EVenuesAction,
  getVenuesSearchAsync,
  ELifeAction,
  putCredentials,
} from 'ts-foursquare'
import { Action } from '..'
import { PutCredentialsForm } from '../../Forms/Life'

const store = configureStore()

describe('Component/Action', () => {
  it('should make a snapshot after action: ELifeAction.PUT_CREDENTIALS', () => {
    const props = {
      action: putCredentials,
      actionPayload: { clientId: '', clientSecret: '' },
      actionType: ELifeAction.PUT_CREDENTIALS,
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

  it('should make a snapshot after action: EVenuesAction.GET_VENUES_SEARCH_REQUES', () => {
    const props = {
      action: getVenuesSearchAsync.request,
      actionPayload: { query: '' },
      actionType: EVenuesAction.GET_VENUES_SEARCH_REQUEST,
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
