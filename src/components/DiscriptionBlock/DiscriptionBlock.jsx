import React from 'react';

import useStyles from './styles';

const DiscriptionBlock = ({DBimg, title, text, buttonText}) => {
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
