import React, { FC } from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from "classnames";

export type ThemeProps = 'primary' | 'default' | 'danger' | 'link'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}
// 如果第三方库未导出组件的 props
// type AwesomeIconProps = React.ComponentProps<typeof FontAwesomeIcon>
// export interface IconProps extends AwesomeIconProps {
//   theme?: ThemeProps
// }

const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...resetProps } = props
  const classes = classNames('', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <>
      <FontAwesomeIcon className={classes} {...resetProps} />
    </>

  )
}

Icon.displayName = 'Icon'
export default Icon