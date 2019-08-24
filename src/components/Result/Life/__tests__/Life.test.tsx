import React from 'react'
import renderer from 'react-test-renderer'
import { configureStore } from 'ts-foursquare'
import { Life } from '..'
import { Provider } from 'react-redux'

const store = configureStore()

describe('Component/Life', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Life />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
