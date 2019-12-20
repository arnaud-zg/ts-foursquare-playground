import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { configureStore } from 'ts-foursquare'
import { ResultState } from '..'

const store = configureStore({ middlewares: [] })

describe('Component/ResultState', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ResultState selectors={{ stateSelector: state => state }} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
