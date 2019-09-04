import React from 'react'
import { withRedux } from '../withRedux'

describe('Hoc/withRedux', () => {
  it('renders correctly', () => {
    expect(withRedux).toMatchSnapshot()
    expect(withRedux(() => <div>Hello World</div>)).toMatchSnapshot()
  })
})
