import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classNames from 'classnames'

// 定义 btn 尺寸枚举
// enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm'
// }

// enum BtnType {
//   Primary = 'primary',
//   Danger = 'danger',
//   Default = 'default',
//   Link = 'link'
// }
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

// 定义 props 
interface BaseButtonProps {
  className?: string,
  disabled?: Boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  href?: string,
  children: React.ReactNode
}
// & 表示叠加（联合）类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
// a 链接
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// 设置属性为可选
// 例如： a 必须有的属性 button 不一定必须
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    size,
    btnType,
    href,
    disabled,
    // 其他 props
    ...resetProps
  } = props

  // 整合类名
  const btnClass = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: (btnType === 'link' && href)
  })

  // 如果是 a 链接
  if (btnType === 'link' && href) {
    return (
      <a href={href} {...resetProps}>{children}</a>
    )
  }
  return (
    <button
      className={btnClass}
      disabled={disabled}
      {...resetProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}
export default Button