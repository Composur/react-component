import Button from '@/components/Button'
import { MouseEvent } from 'react';
function Btn() {
  const clickHandle = (e: MouseEvent): void => {
    console.log(e)
  }
  return (
    <div className="App">
      <Button size='lg' btnType='primary' >Large</Button>
      <Button size='sm' btnType='primary'>Small</Button>
      <Button btnType='primary' >primary</Button>
      <Button btnType='danger' >danger</Button>
      <Button btnType='default' >default</Button>
      <Button btnType='link' href='baidu.com' >link</Button>
      <Button btnType='default' disabled >disabled</Button>
      <Button btnType='default' onClick={clickHandle} >onClick</Button>
    </div>
  );
}

export default Btn;
