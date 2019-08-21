import React from 'react'
import { Header } from './Header'
import { Body } from './Body'
import '../assets/styles/main.scss'

export const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    <Body>{children}</Body>
  </>
)
