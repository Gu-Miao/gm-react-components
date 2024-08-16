import { forwardRef, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { useGlobalContext } from '@/hooks'
import './Button.less'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: 'outline' | 'background' | 'text'
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  cute?: 'full-width' | 'circle'
  size?: 'mini' | 'small' | 'normal' | 'large'
}

const className = 'gmrc-button'
const defaultProps: ButtonProps = { fill: 'background', variant: 'default' }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const globalConfig = useGlobalContext()

  const mergedProps = { ...defaultProps, ...props }
  const classNames = clsx(
    className,
    `${className}-${globalConfig.theme}`,
    `${className}-${mergedProps.fill}`,
    `${className}-${mergedProps.variant}`,
    mergedProps.cute && `${className}-${mergedProps.cute}`,
    mergedProps.className
  )

  return (
    <button {...mergedProps} className={classNames} ref={ref}>
      {mergedProps.children}
    </button>
  )
})
