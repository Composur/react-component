// import StickCom from './Test/stick';
import Button from '@/components/Button'
import { MouseEvent } from 'react';
import Menu from './components/Menu';
import MenuItem from './components/Menu/MenuItem';
function App() {
  const clickHandle = (e: MouseEvent): void => {
    console.log(e)
  }
  return (
    <div className="App">
      <Menu defaultIndex={0}>
        <MenuItem index={0}>1</MenuItem>
        <MenuItem index={1}>2</MenuItem>
        <MenuItem index={2}>3</MenuItem>
      </Menu>
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

export default App;
