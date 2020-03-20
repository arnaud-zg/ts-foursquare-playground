import React, { FC } from 'react'

const className = 'mx-auto w-11/12'

interface BodyProps {
  children: JSX.Element
}

export const Body: FC<BodyProps> = ({ children }) => (
  <body className={className}>{children}</body>
)
