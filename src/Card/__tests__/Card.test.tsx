import React from 'react'
import renderer from 'react-test-renderer'
import { Card, CardContent } from '../'

describe('Component/Card', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Component/CardContent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardContent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
