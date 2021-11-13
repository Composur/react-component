// import StickCom from './Test/stick';
import Button from '@/components/Button'
import { MouseEvent } from 'react';
import Menu from '@/components/Menu';
import MenuItem from '@/components/Menu/MenuItem';
import SubMenu from '@/components/Menu/SubMenu';
function ComView() {
  const clickHandle = (e: MouseEvent): void => {
    console.log(e)
  }
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={e => console.log(e)}>
        <MenuItem >1</MenuItem>
        <SubMenu title='submenu'>
          <MenuItem >SubMenuItem1</MenuItem>
          <MenuItem >SubMenuItem2</MenuItem>
        </SubMenu>
        <MenuItem >2</MenuItem>
        <MenuItem >3</MenuItem>
      </Menu>
      <Menu mode='vertical' defaultIndex={1} onSelect={e => console.log(e)}>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
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

export default ComView;
