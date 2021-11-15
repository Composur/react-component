import Menu from '@/components/Menu';
import MenuItem from '@/components/Menu/MenuItem';
import SubMenu from '@/components/Menu/SubMenu';
function MenuC() {
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
      <Menu style={{ marginTop: '200px' }} mode='vertical' defaultIndex={1} onSelect={e => console.log(e)}>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <SubMenu title='submenu'>
          <MenuItem >SubMenuItem1</MenuItem>
          <MenuItem >SubMenuItem2</MenuItem>
        </SubMenu>
        <MenuItem>3</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuC;
