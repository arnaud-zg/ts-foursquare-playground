import React, { ReactNode } from 'react'
import { Result } from '../Result'
import { Card, CardContent } from '../Card'
import { Header } from '../Header'

interface IActionPayload {
  [key: string]: any
}

interface IProps {
  name: string
  actionCaller: any
  actionPayload?: IActionPayload
  formPayload?: ReactNode
}

export class Action extends React.Component<IProps> {
  render() {
    const { name, actionCaller, actionPayload, formPayload } = this.props
    const action = actionCaller(actionPayload)

    return (
      <section className="shadow">
        <Card>
          <Header title={`${name} | type: ${typeof action}`} />
          <CardContent>
            <div className="flex mt-2">
              <div className="flex-1 self-center">
                <div className="flex">
                  <h2>Action</h2>
                  <pre className="ml-2">
                    <code>{JSON.stringify(action)}</code>
                  </pre>
                </div>
                <div className="flex">
                  <h2>Payload</h2>
                  <p className="ml-2">
                    {actionPayload ? (
                      <pre className="ml-2">
                        <code>{JSON.stringify(actionPayload)}</code>
                      </pre>
                    ) : (
                      "Current action doesn't need any payload"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {formPayload && (
          <div className="flex">
            <Card>
              <Header title="Payload" />
              <CardContent>{formPayload}</CardContent>
            </Card>
            <Result actionType={name} />
          </div>
        )}
      </section>
    )
  }
}
