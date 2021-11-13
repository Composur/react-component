import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from './Menu'

export interface MenuItemProps {
  index?: number
  className?: string,
  style?: React.CSSProperties,
  disabled?: boolean
}

const SunMenu: React.FC<MenuItemProps> = (props) => {
  const MenuProps = useContext(MenuContext)
  const { children, style, disabled, index, className } = props
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': MenuProps.index === index
  })

  const clickHandle = () => {
    if (MenuProps.onSelect && typeof index === 'number') {
      MenuProps.onSelect(index);
    }
  }
  return (
    <li className={classes} style={style} onClick={clickHandle}>
      {children}
    </li>
  )
}
SunMenu.displayName = 'MenuItem'
export default SunMenu