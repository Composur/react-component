import React, { FunctionComponentElement, MouseEvent, useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'
import IconCom from '@/components/Icon'
import Transition from '@/components/Transition'

interface SubMenuProps {
  title: string,
  style?: React.CSSProperties,
  className?: string,
  index?: number
  mode?: string
  defaultOpen?: boolean
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { children, style, className, index, title, defaultOpen } = props
  // 子菜单显隐状态
  const [menuOpen, setMenuOpen] = useState(defaultOpen)
  const MenuProps = useContext(MenuContext)
  // console.log(MenuProps, index)
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
      // 对 children 进行验证
      if (childEle.type.displayName === 'MenuItem') {
        return React.cloneElement(childEle, { index: idx + .1 })
      } else {
        console.error('无法接受非 MenuItem 以外的组件')
      }
    })
    const subMenuClasses = classNames('viking-submenu', className, {
      'menu-opened': menuOpen
    })

    return (
      <Transition
        in={menuOpen}
        timeout={250}
        animation="zoom-in-top"
      >
        <ul className={subMenuClasses}>
          {/* 渲染 li 即 menuItem */}
          {childCom}
        </ul>
      </Transition>
    )
  }
  // 点击展开
  const clickHandle = () => {
    if (MenuProps.onSelect && typeof index === 'number') {
      MenuProps.onSelect(index);
      setMenuOpen(!menuOpen);
    }
  }


  // 展开加个延时放置卡顿
  let timer: any;
  const mouseHander = (e: MouseEvent, open: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(open)
    }, 300);
  }

  // hover 展开
  const hoverHander = {
    onMouseEnter: (e: MouseEvent) => mouseHander(e, true),
    onMouseLeave: (e: MouseEvent) => mouseHander(e, false)
  }

  // subMenu
  return (
    // 也是 Menu 组件的字节点
    <li key={index} className={classes} style={style} {...hoverHander}>
      <div className='submenu-title' onClick={clickHandle}>
        {title}
        <IconCom icon="angle-down" className="arrow-icon" />
      </div>
      {subMenuChild()}
    </li>
  )
}
SubMenu.displayName = 'SubMenuItem'
SubMenu.defaultProps = {
  mode: 'horizontal'
}
export default SubMenu