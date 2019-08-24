import React from 'react'
import renderer from 'react-test-renderer'
import { CardContent } from '..'

describe('Component/CardContent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardContent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
