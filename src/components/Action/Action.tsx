import React, { ReactNode } from 'react'
import { createAction } from 'typesafe-actions'
import { ACTION_DESCRIPTION_MAPPING } from '../../constants/action'
import { i18n } from '../../constants/i18n'
import { Card, CardContent } from '../Card'
import { Header } from '../Header'
import { Result } from '../Result'

interface IActionPayload {
  [key: string]: any
}

interface IProps {
  actionCreator: ReturnType<ReturnType<typeof createAction>>
  actionPayload?: IActionPayload | Error | string
  renderFormPayload?: () => ReactNode
}

export class Action extends React.Component<IProps> {
  render() {
    const { actionCreator, actionPayload, renderFormPayload } = this.props
    const action = actionCreator(actionPayload)

    return (
      <section className="shadow">
        <Card>
          <Header title={action.type} />
          <CardContent>
            {!!ACTION_DESCRIPTION_MAPPING[action.type] && (
              <div className="flex mt-2">
                <div className="flex-1 self-center">
                  <p>{ACTION_DESCRIPTION_MAPPING[action.type]}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        {renderFormPayload && (
          <div className="flex">
            <Card>
              <Header title={i18n.PAYLOAD} />
              <CardContent>{renderFormPayload()}</CardContent>
            </Card>
            <Result actionType={action.type} />
          </div>
        )}
      </section>
    )
  }
}
