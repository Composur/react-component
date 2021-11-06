
import React, { FC, createContext, useState } from 'react'
import classNames from 'classnames'
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
export const MenuContext = createContext<MenuContextProps>({ index: 0, onSelect: (index) => { console.log(index) } })



const Menu: FC<MenuProps> = (props) => {
  const { className, mode, children, style, defaultIndex, onSelect } = props
  const [currentIdx, setCurrentIdx] = useState(defaultIndex)
  const classes = classNames('menu-horizontal', className, {
    'menu-vertical': mode === 'vertical'
  })
  console.log(onSelect);

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
    onSelect: clickHandle
  }
  return (
    <MenuContext.Provider value={contextValue}>
      <ul className={classes} style={style} onSelect={(index) => { console.log(index) }}>
        {children}
      </ul>
    </MenuContext.Provider>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu