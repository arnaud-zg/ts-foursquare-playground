import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { configureStore } from 'ts-foursquare'
import { GetVenuesByLocationForm } from '..'

const store = configureStore()

describe('Component/GetVenuesForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <GetVenuesByLocationForm initialValues={{ ll: '' }} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
