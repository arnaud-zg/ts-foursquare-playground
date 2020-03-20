import classNames from 'classnames'
import { ClassDictionary } from 'classnames/types'
import { createElement, FC } from 'react'

interface TitleProps {
  children: string
  classnames?: ClassDictionary
  level: number
}

interface FontSizeClassMapping {
  [key: number]: string[]
}

const initialClassnames = ['font-sans', 'font-thin']

const FONT_SIZE_CLASS_MAPPING: FontSizeClassMapping = {
  1: ['text-4xl'],
  2: ['text-3xl'],
  3: ['text-2xl'],
  4: ['text-xl'],
  5: ['text-lg'],
  6: ['text-base'],
  7: ['text-sm'],
}

export const Title: FC<TitleProps> = ({ children, classnames, level }) =>
  createElement(
    `h${level}`,
    {
      className: classNames(
        ...initialClassnames,
        FONT_SIZE_CLASS_MAPPING[level],
        classnames
      ),
    },
    children
  )
