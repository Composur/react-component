import React, { FunctionComponentElement, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'


interface SubMenuProps {
  title: string,
  style?: React.CSSProperties,
  className?: string,
  index?: number
  mode?: string
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const MenuProps = useContext(MenuContext)
  console.log(MenuProps)
  const { children, style, className, index, title, mode } = props
  // ul 的样式
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': MenuProps.index === index,
    // 'is-vertical': MenuProps.mode === 'vertical'
  })

  // 子 menuItem 
  const subMenuChild = () => {
    const childCom = React.Children.map(children, (child, idx) => {
      // 得到 childEle
      // 得到submenuItem的displayname需断言成
      const childEle = child as FunctionComponentElement<MenuItemProps>
      if (childEle.type.displayName === 'MenuItem') {
        return React.cloneElement(childEle, { index: idx + .1 })
      } else {
        console.error('无法接受非 MenuItem 以外的组件')
      }
    })
    // 
    const subMenuClasses = classNames('viking-submenu', 'menu-opened', className)

    return (
      <ul className={subMenuClasses}>
        {/* 渲染 li 即 menuItem */}
        {childCom}
      </ul>
    )
  }

  // subMenu
  return (
    // 也是 Menu 组件的字节点
    <li key={index} className={classes} style={style}>
      <div className='submenu-title'>{title}</div>
      {subMenuChild()}
    </li>
  )
}
SubMenu.displayName = 'SubMenuItem'
SubMenu.defaultProps = {
  mode: 'horizontal'
}
export default SubMenu