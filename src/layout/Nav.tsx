import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/components'>组件预览</Link></li>
          <li><Link to='/test'>Test</Link></li>
          <li><Link to='/404'>404</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default MainLayout;