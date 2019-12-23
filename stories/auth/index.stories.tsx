import React from 'react'
import * as queryString from 'query-string'
import popupSensor from 'popup-sensor'
import { EPopupAction } from 'popup-sensor/types'
import { storiesOf } from '@storybook/react'
import { Layout } from '../../src/Layout'

storiesOf('1-Presentation/Project/OAuth Fake', module)
  .add('1-Authenticate', () => {
    return (
      <Layout>
        <section className="shadow">
          <article className="border-b">
            <div className="border-l-2 bg-grey-lightest border-indigo">
              <div className="pl-8 pr-8 pb-5 pt-5 text-grey-darkest">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => {
                    new popupSensor({
                      onLocationChange: (location: Location) => {
                        const locationSearch = queryString.parse(
                          location.search
                        )
                        const shouldClose = !!locationSearch.code

                        if (shouldClose) {
                          alert(locationSearch.code)
                        }

                        return shouldClose
                          ? EPopupAction.CLOSE
                          : EPopupAction.NONE
                      },
                    }).open({
                      url:
                        '?path=/story/1-presentation-project-oauth-fake--2-redirect-uri',
                      title: 'Connect with ts-foursquare-playground',
                    })
                  }}
                >
                  Connect with ts-foursquare-playground
                </button>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    )
  })
  .add('2-Redirect Uri', () => {
    return (
      <Layout>
        <section className="shadow">
          <article className="border-b">
            <div className="border-l-2 bg-grey-lightest border-indigo">
              <div className="pl-8 pr-8 pb-5 pt-5 text-grey-darkest">
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  href={`${window.location.search}&code=1234`}
                >
                  Redirect back to your URI with a code
                </a>
                <p className="my-2">
                  This page should be opened inside a popup.
                </p>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    )
  })
