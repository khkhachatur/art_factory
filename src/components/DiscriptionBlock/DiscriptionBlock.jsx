import React from 'react';
import { Link } from 'react-router-dom';

import SubscribeHere from '../../images/subscribe-here.jpg';


import useStyles from './styles';

const DiscriptionBlock = ({DBimg, title, text, buttonText}) => {
  console.log(DBimg, 9999)
  const classNames = useStyles({ });
  return (
    <div className={classNames.subscribeSection}>
          <img
            className={classNames.subscribeImageBlock}
            src={DBimg}
            alt="subscribeImage"
          />
          <div className={classNames.subscribeDescriptionBlock}>
            <p className={classNames.subscribeTitle}>{title}</p>
            <p className={classNames.subscribeDescription}>
              {text}
            </p>
            <button className={classNames.subscribeButton}>{buttonText}</button>
          </div>
        </div>
  );
};

export default DiscriptionBlock;
