import React, { FC } from 'react'

export const Block: FC = ({ children }) => (
  <section className="border-b shadow border-l-2 bg-grey-lightest border-indigo pl-8 pr-8 pb-5 pt-5 text-grey-darkest">
    {children}
  </section>
)
