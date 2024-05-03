import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
        w-auto 
        rounded-full 
        bg-black
        border
        border-transparent
        px-5 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
      `,
          disabled && 'opacity-75 cursor-not-allowed',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

// Explain forwardRef hook ----> https://chat.openai.com/share/bc0ec5b8-27bd-47f7-b6e4-5bcda215a84f
