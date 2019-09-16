import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'ts-foursquare'

const store = configureStore()

export const withRedux = (story: () => ReactNode) => (
  <Provider store={store}>{story()}</Provider>
)
