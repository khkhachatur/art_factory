import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const AboutUsButton = ({ link }) => {
  const classNames = useStyles();
  return (
    <button className={classNames.button}>
      <Link to={link} className={classNames.link}>
        See All
      </Link>
    </button>
  );
};

export default AboutUsButton;
