import * as React from 'react';
import useStyles from './styles';

import x from '../../images/interface/close-popups.svg';

const Modal = ({ title, text, closeModal, buttonText }) => {

  const classNames = useStyles();

  return (

    <div className={classNames.modalBkg}>
      <div className={classNames.modalContainer}>
        <div className={classNames.close} onClick={() => closeModal(false)}>
          <img src={x} alt="" />
        </div>
        <h3 className={classNames.title}>{title}</h3>
        <p className={classNames.text}>{text}</p>
        {/* <button>{buttonText}</button> */}
      </div>
    </div>
  );
}

export default Modal;

