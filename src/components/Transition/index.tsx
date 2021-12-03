import { FC } from "react";
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'


type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'
type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName,
  // 防止 transition 属性冲突
  wrapper?: boolean,
  classNames?: string
}
// type CSSTransitionProps = ComponentProps<typeof CSSTransition>
const Transition: FC<TransitionProps> = (props) => {
  // console.log(props)
  const { classNames, animation, children, wrapper, ...resets } = props
  return (
    <CSSTransition {...resets} classNames={classNames ? classNames : animation}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition