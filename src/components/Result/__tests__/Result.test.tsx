import React from 'react'
import renderer from 'react-test-renderer'
import { ELifeAction, configureStore } from 'ts-foursquare'
import { Result } from '..'
import { Provider } from 'react-redux'

const store = configureStore()

describe('Component/Result', () => {
  Object.values(ELifeAction).map((action: ELifeAction) => {
    it(`renders correctly for action: ${action}`, () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <Result actionType={action} />
          </Provider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
