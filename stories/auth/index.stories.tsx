import { storiesOf } from '@storybook/react'
import popupSensor from 'popup-sensor'
import { EPopupAction } from 'popup-sensor/types'
import * as queryString from 'query-string'
import React, { useState } from 'react'
import { getClientCredentials, saveClientCredentials } from '../../libs/storage'
import { i18n } from '../../src/constants/i18n'
import { Layout } from '../../src/Layout'

const redirectUri =
  'https://arnaud-zg.github.io/ts-foursquare-playground/iframe.html'

storiesOf('1-Presentation', module).add('2-Authentication', () => {
  const { clientId, clientSecret } = getClientCredentials()
  const [credentials, setCredentials] = useState({ clientId, clientSecret })

  return (
    <Layout>
      <section className="shadow">
        <article className="border-b">
          <div className="border-l-2 bg-grey-lightest border-indigo">
            <div className="flex flex-col pl-8 pr-8 pb-5 pt-5 text-grey-darkest">
              <div>
                <h3 className="text-lg">
                  Set up your account for authenticated endpoints
                </h3>
                <p className="pl-2 my-2">
                  Versioning is controlled by the v parameter, which is a date
                  that represents the “version” of the API for which you expect
                  from Foursquare, `ts-foursquare` uses version `20191028`.
                </p>
                <input
                  className={`w-full mt-2 px-5 py-2 text-gray-700 bg-gray-200 rounded`}
                  type="text"
                  placeholder={`${i18n.REDIRECT_URI}`}
                  value={redirectUri}
                  onChange={e => {
                    setCredentials({
                      ...credentials,
                      clientId: e.target.value,
                    })
                  }}
                />
              </div>
              <div>
                <input
                  className={`w-full mt-2 px-5 py-2 text-gray-700 bg-gray-200 rounded`}
                  type="text"
                  placeholder={`${i18n.CLIENT_ID} ${i18n.CLIENT_ID_PLACEHOLDER}`}
                  value={credentials.clientId}
                  onChange={e => {
                    setCredentials({
                      ...credentials,
                      clientId: e.target.value,
                    })
                  }}
                />
              </div>
              <div>
                <input
                  className={`w-full mt-2 px-5 py-2 text-gray-700 bg-gray-200 rounded`}
                  type="text"
                  placeholder={`${i18n.CLIENT_SECRET} ${i18n.CLIENT_SECRET_PLACEHOLDER}`}
                  value={credentials.clientSecret}
                  onChange={e => {
                    setCredentials({
                      ...credentials,
                      clientSecret: e.target.value,
                    })
                  }}
                />
              </div>
              {credentials.clientId && credentials.clientSecret && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-full"
                  onClick={() => {
                    saveClientCredentials(credentials)

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
                      url: `https://foursquare.com/oauth2/authenticate?client_id=${credentials.clientId}&response_type=code&redirect_uri=${redirectUri}`,
                      title: 'Connect with foursquare',
                    })
                  }}
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
})
