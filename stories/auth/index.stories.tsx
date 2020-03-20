import popupSensor from 'popup-sensor'
import { EPopupAction } from 'popup-sensor/types'
import * as queryString from 'query-string'
import React, { useState } from 'react'
import { getClientCredentials, saveClientCredentials } from '../../libs/storage'
import { Block } from '../../src/components/Block'
import { Button } from '../../src/components/Button'
import { TextInput } from '../../src/components/Form'
import { Text } from '../../src/components/Text'
import { Title } from '../../src/components/Title'
import { i18n } from '../../src/constants/i18n'
import { LayoutDecorator } from '../../src/decorators/Layout'

const redirectUri =
  'https://arnaud-zg.github.io/ts-foursquare-playground/iframe.html'

export const OAuth = () => {
  const { clientId, clientSecret } = getClientCredentials()
  const [credentials, setCredentials] = useState({
    clientId,
    clientSecret,
    redirectUri,
  })

  return (
    <Block>
      <Title level={3}>{i18n.AUTH_SETUP_ACCOUNT_TITLE}</Title>
      <Text>{i18n.AUTH_SETUP_ACCOUNT_DESCRIPTION}</Text>

      <TextInput
        placeholder={`${i18n.REDIRECT_URI}`}
        value={credentials.redirectUri}
        onChange={e => {
          setCredentials({
            ...credentials,
            redirectUri: e.target.value,
          })
        }}
      />

      <TextInput
        placeholder={`${i18n.CLIENT_ID} ${i18n.CLIENT_ID_PLACEHOLDER}`}
        value={credentials.clientId}
        onChange={e => {
          setCredentials({
            ...credentials,
            clientId: e.target.value,
          })
        }}
      />

      <TextInput
        placeholder={`${i18n.CLIENT_SECRET} ${i18n.CLIENT_SECRET_PLACEHOLDER}`}
        value={credentials.clientSecret}
        onChange={e => {
          setCredentials({
            ...credentials,
            clientSecret: e.target.value,
          })
        }}
      />

      {credentials.clientId && credentials.clientSecret && (
        <Button
          onClick={() => {
            saveClientCredentials(credentials)

            new popupSensor({
              onLocationChange: (location: Location) => {
                const locationSearch = queryString.parse(location.search)
                const shouldClose = !!locationSearch.code

                if (shouldClose) {
                  alert(locationSearch.code)
                }

                return shouldClose ? EPopupAction.CLOSE : EPopupAction.NONE
              },
            }).open({
              url: `https://foursquare.com/oauth2/authenticate?client_id=${credentials.clientId}&response_type=code&redirect_uri=${redirectUri}`,
              title: 'Connect with foursquare',
            })
          }}
        >
          Connect
        </Button>
      )}
    </Block>
  )
}

export default {
  title: 'Presentation/Authentication',
  component: OAuth,
  decorators: [LayoutDecorator],
}
