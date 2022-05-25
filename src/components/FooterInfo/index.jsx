import React from 'react';

import youtube from '../../images/interface/youtube-icon.svg';
import facebook from '../../images/interface/facebook-icon.svg';
import instagram from '../../images/interface/instagram-icon.svg';
import tripadvisor from '../../images/interface/tripadvisor-licon.svg';

import useStyles from './styles';

const FooterInfo = ({title, tel, mail, adress,web,link, socialLink}) => {

  const classNames = useStyles();

  return (
    
        <div className={classNames.info}>
          <h3 className={classNames.title}>{title}</h3>
          <ul className={classNames.list}>
            <li className={classNames.item}>{tel} </li>
            <li className={classNames.item}>{mail}</li>
            <li className={classNames.item}>{web}</li>
            <li className={classNames.item}>{adress}</li>
            <li className={classNames.item}>{link}</li>

          </ul>  
          <h3 className={classNames.title}>SOCIAL MEDIA</h3>
          <ul className={classNames.listImg}>
          <li className={classNames.img}><img src={instagram} alt="icon" /></li>
            <li className={classNames.img}><img src={facebook} alt="icon" /></li>
            <li className={classNames.img}><img src={youtube} alt="icon" /></li>
            <li className={classNames.img}><img src={tripadvisor} alt="icon" /></li>
          </ul>
        </div>
  );
};

export default FooterInfo;
