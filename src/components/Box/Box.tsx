import React, { FC } from 'react'

const className = ''

interface BoxProps {
  children: JSX.Element
}

export const Box: FC<BoxProps> = ({ children }) => (
  <body className={className}>{children}</body>
)
