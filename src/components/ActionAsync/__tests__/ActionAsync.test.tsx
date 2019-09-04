import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import {
  configureStore,
  EVenuesAction,
  getVenuesSearchAsync,
} from 'ts-foursquare'
import { ActionAsync } from '..'
import { PutCredentialsForm } from '../../Forms/Life'

const store = configureStore()

describe('Component/ActionAsync', () => {
  it('renders correctly', () => {
    const props = {
      actionType: EVenuesAction.GET_VENUES_SEARCH_REQUEST,
      actionAsync: getVenuesSearchAsync,
      actionPayload: { query: '' },
      renderFormPayload: () => <PutCredentialsForm />,
    }
    const tree = renderer
      .create(
        <Provider store={store}>
          <ActionAsync {...props} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
