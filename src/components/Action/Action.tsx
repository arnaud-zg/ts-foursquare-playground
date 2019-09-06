import React, { ReactNode } from 'react'
import { Card, CardContent } from '../Card'
import { Header } from '../Header'
import { Result } from '../Result'
import { i18n } from '../../constants/i18n'
import { createAction } from 'typesafe-actions'

interface IActionPayload {
  [key: string]: any
}

interface IProps {
  actionCreator: ReturnType<typeof createAction>
  actionPayload?: IActionPayload | Error | string
  renderFormPayload?: () => ReactNode
}

export class Action extends React.Component<IProps> {
  render() {
    const {
      actionCreator,
      actionPayload,
      // actionType,
      renderFormPayload,
    } = this.props
    const action = actionCreator(actionPayload)

    return (
      <section className="shadow">
        <Card>
          <Header title={action.type} />
          <CardContent>
            <div className="flex mt-2">
              <div className="flex-1 self-center">
                <h2>{i18n.ACTION_EXAMPLE}</h2>
                <div className="flex">
                  <h3>{i18n.ACTION}</h3>
                  <pre className="ml-2">
                    <code>{JSON.stringify(action)}</code>
                  </pre>
                </div>
                <div className="flex">
                  <h3>{i18n.PAYLOAD}</h3>
                  <p className="ml-2">
                    {actionPayload ? (
                      <pre className="ml-2">
                        <code>{JSON.stringify(actionPayload)}</code>
                      </pre>
                    ) : (
                      i18n.ACTION_NO_NEED_PAYLAOD
                    )}
                  </p>
                </div>
              </div>
            </div>
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
