import React from 'react'
import Header from './Header'
import Body from './Body'
import '../assets/styles/main.scss'

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    <Body>{children}</Body>
  </>
)

export default Layout
