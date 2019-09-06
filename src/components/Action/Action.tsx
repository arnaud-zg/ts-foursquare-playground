import React, { ReactNode } from 'react'
import { Card, CardContent } from '../Card'
import { Header } from '../Header'
import { Result } from '../Result'
import { i18n } from '../../constants/i18n'

interface IActionPayload {
  [key: string]: any
}

interface IProps {
  name: string
  actionCaller: any
  actionPayload?: IActionPayload | Error | string
  renderFormPayload?: () => ReactNode
}

export class Action extends React.Component<IProps> {
  render() {
    const { name, actionCaller, actionPayload, renderFormPayload } = this.props
    const action = actionCaller ? actionCaller(actionPayload) : null

    return (
      <section className="shadow">
        <Card>
          <Header title={`${name} | type: ${typeof action}`} />
          <CardContent>
            <div className="flex mt-2">
              <div className="flex-1 self-center">
                <div className="flex">
                  <h2>{i18n.ACTION}</h2>
                  <pre className="ml-2">
                    <code>{JSON.stringify(action)}</code>
                  </pre>
                </div>
                <div className="flex">
                  <h2>{i18n.PAYLOAD}</h2>
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
              <Header title="Payload" />
              <CardContent>{renderFormPayload()}</CardContent>
            </Card>
            <Result actionType={name} />
          </div>
        )}
      </section>
    )
  }
}
