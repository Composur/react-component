
import React, { FC, createContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './MenuItem'
// 定义显示的类型 
type MenuMode = 'horizontal' | 'vertical'
type onSelectCb = (index: number) => void
interface MenuProps {
  defaultIndex?: number,
  mode?: MenuMode,
  className?: string,
  // 自定义样式
  style?: React.CSSProperties,
  // 回调
  onSelect?: onSelectCb
}

// context 类型
interface MenuContextProps {
  index?: number,
  onSelect?: onSelectCb
}
// 定义 context
export const MenuContext = createContext<MenuContextProps>({
  index: 0,
  onSelect: (index) => { console.log(index) },
  // mode:
})



const Menu: FC<MenuProps> = (props) => {
  const { className, mode, children, style, defaultIndex, onSelect } = props
  const [currentIdx, setCurrentIdx] = useState(defaultIndex)
  const classes = classNames('menu', `menu-${mode}`, className)

  // set index
  const clickHandle = (index: number) => {
    setCurrentIdx(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  // context value
  const contextValue = {
    index: currentIdx ? currentIdx : 0,
    onSelect: clickHandle,
    mode,
  }

  // 限制 children 的类型

  const MenuItemRender = () => {
    return React.Children.map(children, (child, idx) => {
      // 为了获取 type 这里需要把 child 断言成 FunctionComponentElement 实例
      const childEle = child as FunctionComponentElement<MenuItemProps>
      if (['MenuItem', 'SubMenuItem'].includes(childEle.type.displayName as string)) {
        return React.cloneElement(childEle, { index: idx });
      } else {
        console.error('无法接受非 MenuItem 以外的组件')
      }
    })
  }
  return (
    <ul className={classes} style={style} >
      <MenuContext.Provider value={contextValue}>
        {MenuItemRender()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu