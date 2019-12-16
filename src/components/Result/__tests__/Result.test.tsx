import React from 'react'
import renderer from 'react-test-renderer'
import { getType } from 'typesafe-actions'
import { lifeActions, configureStore } from 'ts-foursquare'
import { Result } from '..'
import { Provider } from 'react-redux'

const store = configureStore()

describe('Component/Result', () => {
  Object.values([lifeActions.putCredentials, lifeActions.setOAuth2]).map(
    actionCreator => {
      const actionType = getType(actionCreator)
      it(`renders correctly for action: ${actionType}`, () => {
        const tree = renderer
          .create(
            <Provider store={store}>
              <Result actionType={actionType} />
            </Provider>
          )
          .toJSON()
        expect(tree).toMatchSnapshot()
      })
    }
  )
})
