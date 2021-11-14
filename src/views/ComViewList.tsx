import React from 'react';
import { Link } from 'react-router-dom';

const Button: React.FC = (): JSX.Element => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/components/btn'>Button</Link></li>
          <li><Link to='/components/menu'>Menu</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Button;