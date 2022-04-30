import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Header = () => {
  const classNames = useStyles();

  return (
    <div className={classNames.headerHolder}>
      <header className={classNames.header}>
        <div className={classNames.logo}>
          <Link to='/' className={classNames.logoText}>AF</Link>
        </div>
        <div className={classNames.menuBurger}>Menu</div>
      </header>
    </div>
  );
};

export default Header;
