import React, { FC } from "react";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faAd } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// library.add(faAd, faCheckSquare, faCoffee)
const Icon: FC = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'red', fontSize: '50px' }} />
      <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'red', fontSize: '50px' }} spin />
      <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'red', fontSize: '50px' }} pulse />
      <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'red', fontSize: '50px' }} border />
      <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'red', fontSize: '50px' }} pull="left" />
      <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'blue', fontSize: '50px' }} flip="horizontal" />
      <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'red', fontSize: '50px' }} flip="vertical" />
      <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'red', fontSize: '50px' }} flip="both" />
      <FontAwesomeIcon icon={faCoffee} size={'6x'} />
      <FontAwesomeIcon icon={faCoffee} pull="left" />
      <FontAwesomeIcon icon={faCoffee} pull="right" />
    </>

  )
}

Icon.displayName = 'Icon'
export default Icon