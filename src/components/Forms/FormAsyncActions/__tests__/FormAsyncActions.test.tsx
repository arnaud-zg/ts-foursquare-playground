import React from 'react'
import renderer from 'react-test-renderer'
import { FormAsyncActions } from '..'

describe('Component/FormAsyncActions', () => {
  test.each`
    FormAsyncActionsProps
    ${{ hasError: true, onCancel: () => {}, onFailure: () => {}, onRequest: () => {}, onReset: () => {}, onSuccess: () => {} }}
    ${{ hasError: false, onCancel: () => {}, onFailure: () => {}, onRequest: () => {}, onReset: () => {} }}
    ${{ hasError: false, onCancel: () => {}, onFailure: () => {}, onRequest: () => {} }}
    ${{ hasError: false, onCancel: () => {}, onFailure: () => {} }}
    ${{ hasError: false, onCancel: () => {} }}
  `(
    'renders correctly with $FormAsyncActionsProps',
    ({ FormAsyncActionsProps }) => {
      const tree = renderer
        .create(<FormAsyncActions {...FormAsyncActionsProps} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    }
  )
})
