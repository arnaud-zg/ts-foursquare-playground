import React from 'react'
import { ELifeAction } from 'ts-foursquare'
import { Card, CardContent } from '../Card'
import { Header } from '../Header'
import { Life } from './Life'

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
