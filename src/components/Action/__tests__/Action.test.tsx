import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import {
  configureStore,
  getVenuesSearchAsync,
  putCredentials,
} from 'ts-foursquare'
import { Action } from '..'
import { PutCredentialsForm } from '../../Forms/Life'
import { GetVenuesByQueryForm } from '../../Forms'

const store = configureStore()

describe('Component/Action', () => {
  it('should make a snapshot after action: ELifeAction.PUT_CREDENTIALS', () => {
    const props = {
      actionCreator: putCredentials,
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

  it('should make a snapshot after action: EVenuesAction.GET_VENUES_SEARCH_REQUEST', () => {
    const initialValues = { query: '' }
    const props = {
      actionCreator: getVenuesSearchAsync.request,
      actionPayload: initialValues,
      renderFormPayload: () => (
        <GetVenuesByQueryForm initialValues={initialValues} />
      ),
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
