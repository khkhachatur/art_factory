import React from 'react';

import instagram from '../../images/instagram1.svg'
import facebook from '../../images/facebook1.svg'
import youtube from '../../images/youtube1.svg'
import tripAdvisor from '../../images/tripadvisor1.svg'

import useStyles from './styles';

const ContactCard = ({title, time, days, floor, email, social}) => {
  const classNames = useStyles({ });
  return (
    <div className={classNames.container}>
      <div className={classNames.title}>{title}</div>
      <div className={classNames.allContainer}>
      <ul className={classNames.list}>
        <li className={classNames.item}><strong>Working hours</strong></li>
        <li className={classNames.item}>
          <p>{time.timeText1}</p>
        </li>
        <li className={classNames.item}>
          <p>{time.timeText2}</p>
        </li>
        <li className={classNames.item}>
          <p>{time.timeText3}</p>
        </li>
      </ul>
      <div className={classNames.contacts}>
        <p><strong>Contacts</strong></p>
        <p className={classNames.contactItem}>{floor}</p>
      </div>
      <div className={classNames.mail}>
        <p><strong>For general inquiries</strong></p>
        <a href="mailto: {email}" target='_blank' rel="noreferrer" className={classNames.maillink}>{email}</a>
      </div>
      <div className={classNames.contacts}>
        <p><strong>Social Media</strong></p>
        <ul className={classNames.sociallist}>
          {social?.instagram &&
            <li><a href="www.instagram.com" target='_blank' rel="noreferrer"><img className={classNames.socialImg}  src={instagram} alt="" /></a></li>
          }  
          {social?.facebook && 
            <li><a href="www.facebook.com" target='_blank' rel="noreferrer"><img className={classNames.socialFacebookImg} src={facebook} alt="" /></a></li>
          }
          {social?.youtube &&
            <li><a href="www.youtube.com" target='_blank' rel="noreferrer"><img className={classNames.socialImg}  src={youtube} alt="" /></a></li>
          }
          {social?.tripAdvisor &&
            <li><a href="www.tripadvisor.com" target='_blank' rel="noreferrer"><img className={classNames.socialImg} src={tripAdvisor} alt="" /></a></li>
          }
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ContactCard;
