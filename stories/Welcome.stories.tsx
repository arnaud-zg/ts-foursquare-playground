import React from 'react'
import { LayoutDecorator } from '../src/decorators/Layout'
import { Title } from '../src/components/Title'
import { Text } from '../src/components/Text'
import { i18n } from '../src/constants/i18n'
import { Block } from '../src/components/Block'

export const ToStorybook = () => (
  <Block>
    <Title level={3}>{i18n.WELCOME_PROJECT_TITLE}</Title>
    <Text>{i18n.WELCOME_PROJECT_DESCRIPTION}</Text>

    <Title level={3}>{i18n.WELCOME_DOCUMENTATION_TITLE}</Title>
    <Text>
      {i18n.WELCOME_DOCUMENTATION_DESCRIPTION}{' '}
      <a
        href="https://github.com/arnaud-zg/ts-foursquare/blob/master/docs/usage.md#getting-started"
        target="_blank"
      >
        {i18n.CHECK_DOCUMENTATION}
      </a>
      .
    </Text>
  </Block>
)

ToStorybook.story = {
  name: 'Playground of ts-foursquare',
}

export default {
  title: 'Presentation',
  component: ToStorybook,
  decorators: [LayoutDecorator],
}
