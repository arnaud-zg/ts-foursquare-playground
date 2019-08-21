import React from 'react'
import renderer from 'react-test-renderer'
import { Header } from '../'

describe('Component/Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header title="Title" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
