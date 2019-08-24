import React from 'react'
import renderer from 'react-test-renderer'
import { configureStore } from 'ts-foursquare'
import { GetLifeForm } from '..'
import { Provider } from 'react-redux'

const store = configureStore()

describe('Component/GetLifeForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <GetLifeForm />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
