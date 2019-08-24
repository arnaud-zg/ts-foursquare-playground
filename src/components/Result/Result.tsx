import React from 'react'
import { ELifeAction, EVenuesAction } from 'ts-foursquare'
import { Card, CardContent } from '../Card'
import { Header } from '../Header'
import { Life } from './Life'
import { Venues } from './Venues'

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
          {Object.values(EVenuesAction).indexOf(actionType) !== -1 && (
            <Venues />
          )}
        </CardContent>
      </Card>
    )
  }
}
