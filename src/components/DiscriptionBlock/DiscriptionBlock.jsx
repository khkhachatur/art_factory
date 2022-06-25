import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const DiscriptionBlock = ({DBimg, title, text, buttonText}) => {
  const classNames = useStyles({ });


  return (
    <>
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
            <Link to ='/ybaf-request'> <button className={classNames.subscribeButton}>{buttonText}</button> </Link>
          </div>
      </div>

    </>
  );
};

export default DiscriptionBlock;
