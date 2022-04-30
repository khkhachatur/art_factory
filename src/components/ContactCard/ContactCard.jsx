import React from 'react';
import { Link } from 'react-router-dom';

import instagram from '../../images/instagram1.svg'
import facebook from '../../images/facebook1.svg'
import youtube from '../../images/youtube1.svg'
import tripAdvisor from '../../images/tripadvisor1.svg'

import useStyles from './styles';

const ContactCard = ({title, time, address, floor, tel, email, emailLink, social}) => {
  const classNames = useStyles({ });
  console.log(social, 999)

  return (
    <div className={classNames.container}>
      <div className={classNames.title}>{title}</div>
      <div className={classNames.allContainer}>
      <ul className={classNames.list}>
        <li className={classNames.item}><strong>Working hours</strong></li>
        <li className={classNames.item}>
          <p>Mon</p>
          <p>{time.Mon}</p>
        </li>
        <li className={classNames.item}>
          <p>Tue</p>
          <p>{time.Tue}</p>
        </li>
        <li className={classNames.item}>
          <p>Wed</p>
          <p>{time.Wed}</p>
        </li>
        <li className={classNames.item}>
          <p>Thu</p>
          <p>{time.Thu}</p>
        </li>
        <li className={classNames.item}>
          <p>Fri</p>
          <p>{time.Fri}</p>
        </li>
        <li className={classNames.item}>
          <p>Sat</p>
          <p>{time.Sat}</p>
        </li>
        <li className={classNames.item}>
          <p>Sun</p>
          <p>{time.Sun}</p>
        </li>
       

      </ul>
      <div className={classNames.contacts}>
        <p><strong>Contacts</strong></p>
        <p className={classNames.contactItem}>{address}</p>
        <p className={classNames.contactItem}>{floor}</p>
        <p className={classNames.contactItem}>{tel}</p>
      </div>
      <div className={classNames.mail}>
        <p><strong>For general inquiries</strong></p>
        <a href="mailto: {email}" target='_blank' className={classNames.maillink}>{email}</a>
      </div>
      <div className={classNames.contacts}>
        <p><strong>Social Media</strong></p>
        <ul className={classNames.sociallist}>
          {social?.instagram &&
            <li><a className={classNames.img} href="" target='_blank'><img src={instagram} alt="" /></a></li>
          }  
          {social?.facebook && 
            <li><a className={classNames.img} href="" target='_blank'><img src={facebook} alt="" /></a></li>
          }
          {social?.youtube &&
            <li><a className={classNames.img} href="" target='_blank'><img src={youtube} alt="" /></a></li>
          }
          {social?.tripAdvisor &&
            <li><a className={classNames.img} href="" target='_blank'><img src={tripAdvisor} alt="" /></a></li>
          }
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ContactCard;
