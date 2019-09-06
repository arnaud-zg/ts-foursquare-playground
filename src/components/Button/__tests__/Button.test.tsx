import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '..'

describe('Component/Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button label="Ok" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
