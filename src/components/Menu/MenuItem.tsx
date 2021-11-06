import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from './Menu'

interface MenuItemProps {
  index: number
  className?: string,
  style?: React.CSSProperties,
  disabled?: boolean
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const MenuProps = useContext(MenuContext)
  const { children, style, disabled, index } = props
  const classes = classNames(classNames, {
    'is-disabled': disabled,
    'is-active': MenuProps.index === index
  })

  const clickHandle = () => {
    if (MenuProps.onSelect) {
      MenuProps.onSelect(index);
    }
  }
  return (
    <li className={classes} style={style} onClick={clickHandle}>
      {children}
    </li>
  )
}

export default MenuItem