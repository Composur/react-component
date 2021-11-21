import React, { FC } from "react";
import IconCom from '@/components/Icon'
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
const IconComV: FC = () => {
  return (
    <>
      <IconCom theme='primary' icon={faCheckSquare} style={{ fontSize: '50px' }} />
      <IconCom theme='default' icon={faCheckSquare} style={{ fontSize: '50px' }} />
      <IconCom theme='danger' icon={faCheckSquare} style={{ fontSize: '50px' }} />
      <IconCom theme='link' icon={faCheckSquare} style={{ fontSize: '50px' }} rotate={90} />
      <IconCom icon={faCheckSquare} style={{ fontSize: '50px' }} pull="left" />
      <IconCom icon={faCheckSquare} style={{ color: 'blue', fontSize: '50px' }} flip="horizontal" />
      <IconCom icon={faCheckSquare} style={{ fontSize: '50px' }} flip="vertical" />
      <IconCom icon={faCheckSquare} style={{ color: 'red', fontSize: '50px' }} flip="both" />
      <IconCom icon={faCoffee} size={'6x'} />
      <IconCom icon={faCoffee} pull="left" />
      <IconCom icon={faCoffee} pull="right" />
    </>
  )
}

export default IconComV