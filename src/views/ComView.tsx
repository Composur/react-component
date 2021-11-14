import { Link, Outlet } from 'react-router-dom';
function ComView() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li><Link to='/btn'>按钮</Link></li>
          <li><Link to='/menu'>导航</Link></li>
        </ul>
      </nav> */}
      <h2>组件列表</h2>
      <Outlet />
    </div>
  );
}

export default ComView;
