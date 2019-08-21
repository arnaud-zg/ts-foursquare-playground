import React, { ReactNode } from 'react'
import { PutCredentialsForm } from '../Forms/Life/PutCredentialsForm'

interface IActionPayload {
  [key: string]: any
}

interface IState {}

interface IProps {
  name: string
  actionCaller: any
  actionPayload?: IActionPayload
  formPayload?: ReactNode
}

export class Action extends React.Component<IProps, IState> {
  render() {
    const { name, actionCaller, actionPayload, formPayload } = this.props
    const action = actionCaller(actionPayload)

    return (
      <section className="shadow">
        <article className="border-b">
          <div className="border-l-2 bg-grey-lightest border-indigo">
            <header className="flex justify-between items-center p-5 pl-8 pr-8">
              <span className="text-indigo font-thin text-xl">
                {`${name} | type: ${typeof action}`}
              </span>
              <div className="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo" />
            </header>
            <div>
              <div className="pl-8 pr-8 pb-5 text-grey-darkest select-none">
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
              </div>
            </div>
          </div>
        </article>
        {formPayload && (
          <article className="border-b">
            <div className="border-l-2 bg-grey-lightest border-indigo">
              <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                <span className="text-indigo font-thin text-xl">Payload</span>
              </header>
              <div>
                <div className="pl-8 pr-8 pb-5 text-grey-darkest select-none">
                  <PutCredentialsForm
                    onSubmit={values => {
                      alert(JSON.stringify(values, null, 2))
                    }}
                  />
                </div>
              </div>
            </div>
          </article>
        )}
      </section>
    )
  }
}
