import React from 'react'
import { Header } from '../../components/Header'
import { Body } from '../../components/Body'
import { DecoratorFn } from '@storybook/react'

export const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    <Body>{children}</Body>
  </>
)

export const LayoutDecorator: DecoratorFn = storyFn => (
  <Layout>{storyFn()}</Layout>
)
