import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { configureStore } from 'ts-foursquare'
import { PutCredentialsForm } from '..'

const store = configureStore({ middlewares: [] })

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
