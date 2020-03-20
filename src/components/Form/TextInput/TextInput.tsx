import React, { FC, InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: FC<TextInputProps> = props => (
  <input
    {...props}
    className={`w-full mt-2 px-5 py-2 text-gray-700 bg-gray-200 rounded`}
    type="text"
  />
)
