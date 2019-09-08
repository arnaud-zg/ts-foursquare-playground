import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '..'

describe('Component/Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button label="Ok" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with error', () => {
    const tree = renderer.create(<Button label="Ok" hasError={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with disabled', () => {
    const tree = renderer.create(<Button label="Ok" disabled={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
