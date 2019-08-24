import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { configureStore } from 'ts-foursquare'
import { Venues } from '..'

const store = configureStore()

describe('Component/Venues', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Venues />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
