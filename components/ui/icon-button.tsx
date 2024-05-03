import { MouseEventHandler } from 'react'

import { cn } from '@/lib/utils'

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  icon: React.ReactElement
  className?: string
  title?: string
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  title
}) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className
      )}
    >
      {icon}
    </button>
  )
}

export default IconButton
