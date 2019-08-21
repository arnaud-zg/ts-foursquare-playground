import React from 'react'
import renderer from 'react-test-renderer'
import { Result } from '../'

describe('Component/Result', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Result />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
