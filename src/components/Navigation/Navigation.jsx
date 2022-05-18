import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Navigation = ({navTo, navToLink, navToTo, navToToLink}) => {
  const classNames = useStyles({});
  return (
    <div className={classNames.nav}>
      <Link to='/'><p className={classNames.navText}>Home</p></Link>
      <p className={classNames.navText}>&rsaquo;</p>
      <Link to='/'><p className={classNames.navText}>{navTo}</p></Link>
      <p className={classNames.navText}>&rsaquo;</p>
      <Link to='/'><p className={classNames.navText}>{navToTo}</p></Link>
    </div>
  );
};

export default Navigation;
