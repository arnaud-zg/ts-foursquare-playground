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
          {Object.values(ELifeAction).indexOf(actionType as ELifeAction) !==
            -1 && <Life />}
          {Object.values(EVenuesAction).indexOf(actionType as EVenuesAction) !==
            -1 && <Venues />}
        </CardContent>
      </Card>
    )
  }
}
