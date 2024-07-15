'use client'

import React from 'react'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

function Button({
  variant = 'primary',
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx('w-full rounded-md px-4 py-2 hover:ring', {
        'bg-blue-500 text-white ring-blue-400/10 hover:bg-blue-500/85':
          variant === 'primary',
        'bg-zinc-500 text-white ring-zinc-400/10 hover:bg-zinc-500/85':
          variant === 'secondary',
      })}
      {...rest}
    >
      <span
        className={clsx('font-semibold', {
          'text-white': variant === 'primary',
          'text-zinc-900': variant === 'secondary',
        })}
      >
        {children}
      </span>
    </button>
  )
}

export { Button }
