import React from 'react';
import useStyles from './styles';

const Title = ({ text }) => {
  const classNames = useStyles();
  return <p className={classNames.text}>{text}</p>;
};

export default Title;
 