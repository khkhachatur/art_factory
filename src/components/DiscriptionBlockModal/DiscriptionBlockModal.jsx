import React, {useState} from 'react';

import useStyles from './styles';

import x from '../../images/interface/close-popups.svg';

const DiscriptionBlockModal = ({DBimg, title, text, buttonText}) => {
  const classNames = useStyles({ });

  const [openModal, setOpenModal] = useState(false)

  const [state, setState] = useState("")

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
            <button onClick={() => setOpenModal(true)} className={classNames.subscribeButton}>{buttonText}</button>
          </div>
      </div>
        {openModal && (
          <div className={classNames.modal}>
            <div className={classNames.close} onClick={() => setOpenModal(false)}>
              <h2 className={classNames.title}>Subsribe</h2>
              <img src={x} alt="" />
            </div>
            <ul className={classNames.inputList}>
              <li className={classNames.inputItem}>
                <h3 className={classNames.inputTitle}>Full Name</h3>
                <input className={classNames.input} type="text" />
              </li>
              <li className={classNames.inputItem}>
                <h3 className={classNames.inputTitle}>Email</h3>
                <input className={classNames.input} type="text" />
              </li>
            </ul>
            <ul className={classNames.gender}>
              <li>
                <h3 className={classNames.inputTitle}>Gender</h3>
                <select className={classNames.inputAge} value = {state} onChange ={(e) => 
                  {
                    const selectedMale = e.target.value
                    setState(selectedMale)
                  }}>
                    <option value = "male">Male</option>
                    <option value = "female">Female</option>
                </select>
              </li>
              <li>
                <h3 className={classNames.inputTitle}>Age</h3>
                <input className={classNames.inputAge} type="text" />
              </li>
            </ul>
            <button className={classNames.btnSubsribe}>Subsribe</button>
          </div>
        )}
    </>
  );
};

export default DiscriptionBlockModal;
