import React, { FC } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = props => (
  <button
    {...props}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-full"
  />
)
