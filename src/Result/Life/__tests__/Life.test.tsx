import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { configureStore } from 'ts-foursquare'
import { Life } from '..'

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
