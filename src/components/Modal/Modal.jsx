import * as React from 'react';
import useStyles from './styles';

import x from '../../images/interface/close-popups.svg';

const Modal = ({ title, text, closeModal }) => {

  const classNames = useStyles();

  return (

    <div className={classNames.modalBkg}>
      <div className={classNames.modalContainer}>
        <div className={classNames.close} onClick={() => closeModal(false)}>
          <h3 className={classNames.title}>{title}</h3>
          <img src={x} alt="" />
        </div>
        <p className={classNames.text}>{text}</p>
      </div>
    </div>
  );
}

export default Modal;

