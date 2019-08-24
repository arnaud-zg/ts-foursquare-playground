import React from 'react'
import { Header } from '../Header'
import { Card, CardContent } from '../Card'
import { Life } from './Life'
import { ELifeAction } from 'ts-foursquare'

interface Props {
  actionType: string
}

export class Result extends React.Component<Props> {
  render() {
    const { actionType } = this.props
    return (
      <Card>
        <Header title="Result" />
        <CardContent>
          {Object.values(ELifeAction).indexOf(actionType) !== -1 && <Life />}
        </CardContent>
      </Card>
    )
  }
}
