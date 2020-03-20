import React from 'react'
import renderer from 'react-test-renderer'
import { Body } from '..'

describe('Component/Body', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Body>
          <p>Custom content</p>
        </Body>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
