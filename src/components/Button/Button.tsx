import React from 'react'

export enum EIconType {
  ARROW_RIGHT = 'ARROW_RIGHT',
}

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasError?: boolean
  iconType?: EIconType
  label: string
}

export class Button extends React.Component<IProps> {
  static defaultProps = {
    hasError: false,
  }

  render() {
    const {
      className,
      disabled,
      hasError,
      iconType,
      label,
      ...restProps
    } = this.props
    let classNames = (className || '')
      .split(' ')
      .concat([
        'bg-white',
        'text-gray-800',
        'font-bold',
        'rounded',
        'border-b-2',
        'shadow-md',
        'py-2',
        'px-6',
        'inline-flex',
        'items-center',
      ])

    if (disabled) {
      classNames = classNames.concat(['bg-gray-500', 'cursor-default'])
    } else if (hasError) {
      classNames = classNames.concat([
        'bg-red-500',
        'hover:border-red-600',
        'hover:text-white',
      ])
    } else {
      classNames = classNames.concat([
        'border-green-500',
        'hover:border-green-600',
        'hover:bg-green-500',
        'hover:text-white',
      ])
    }

    return (
      <button
        {...restProps}
        className={classNames.join(' ')}
        disabled={disabled}
      >
        <span className="mr-2">{label}</span>

        {iconType === EIconType.ARROW_RIGHT && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentcolor"
              d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
            />
          </svg>
        )}
      </button>
    )
  }
}
