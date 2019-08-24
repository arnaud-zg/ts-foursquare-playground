import React from 'react'
import renderer from 'react-test-renderer'
import { PutCredentialsForm } from '..'
import { configureStore } from 'ts-foursquare'
import { Provider } from 'react-redux'

const store = configureStore()

describe('Component/PutCredentialsForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PutCredentialsForm />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
