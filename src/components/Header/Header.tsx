import React from 'react'
import { i18n } from '../../constants/i18n'
import { Title } from '../Title'

export const Header = () => (
  <div className={'bg-gray-400 w-11/12 p-2 mx-auto mt-2 rounded-t text-center'}>
    <Title level={1}>{i18n.HEADER_TITLE}</Title>
  </div>
)
