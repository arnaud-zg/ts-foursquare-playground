import { RenderFunction } from '@storybook/react'
import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'ts-foursquare'

const store = configureStore()

export const withRedux = (story: RenderFunction) => (
  <Provider store={store}>{story()}</Provider>
)
