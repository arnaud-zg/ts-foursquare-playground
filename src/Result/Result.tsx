import React from 'react'
import { Header } from '../Header'
import { Card, CardContent } from '../Card'

export class Result extends React.Component {
  render() {
    return (
      <Card>
        <Header title="Result" />
        <CardContent>Cool Content</CardContent>
      </Card>
    )
  }
}
