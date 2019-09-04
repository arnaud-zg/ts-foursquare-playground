import React from 'react'
import renderer from 'react-test-renderer'
import { Layout } from '../'

describe('Component/ResultState', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Layout>
          <div>Custom content</div>
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
