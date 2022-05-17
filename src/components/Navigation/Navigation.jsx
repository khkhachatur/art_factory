import React from 'react';

import useStyles from './styles';

const Navigation = ({navTo, navToTo}) => {
  const classNames = useStyles({});
  return (
    <div className={classNames.nav}>
    <p className={classNames.navText}>Home</p>
    <p className={classNames.navText}>&rsaquo;</p>
    <p className={classNames.navText}>{navTo}</p>
    <p className={classNames.navText}>&rsaquo;</p>
    <p className={classNames.navText}>{navToTo}</p>
  </div>
  );
};

export default Navigation;
