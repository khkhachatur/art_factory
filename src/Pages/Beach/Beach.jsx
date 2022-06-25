import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { contactCard, events } from '../../db/dataBase';

import Title from '../../components/Title/Title';
import EventCard from '../../components/EventCard/EventCard';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';

import youtube from '../../images/youtube1.svg'
import facebook from '../../images/facebook1.svg'
import instagram from '../../images/instagram1.svg'
import joinUs from '../../images/THE-BEACH/joinUs.png';
import reserve from '../../images/THE-BEACH/op_02.png';
import bigQR from '../../images/THE-BEACH/qr-code-big.png';
import bf_1 from '../../images/THE-BEACH/beach-food-1.jpg';
import bf_2 from '../../images/THE-BEACH/beach-food-2.jpg';
import bf_3 from '../../images/THE-BEACH/beach-food-3.jpg';
import bf_4 from '../../images/THE-BEACH/beach-food-4.jpg';
import b1 from '../../images/THE-BEACH/beach-gallery-1.jpg';
import b2 from '../../images/THE-BEACH/beach-gallery-3.jpg';
import b3 from '../../images/THE-BEACH/beach-gallery-1.jpg';
import b4 from '../../images/THE-BEACH/beach-gallery-4.jpg';
import MainImage from '../../images/THE-BEACH/beachtop.jpg';
import contacts from '../../images/THE-BEACH/beach-contacts-img.jpg';


import useStyles from './styles';
import Footer from '../../components/Footer';

const Beach = () => {
const contactRef = useRef();

  const classNames = useStyles();
  const contactCardInfo = contactCard[0];

  console.log(contactCardInfo)

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
          className={classNames.mainImage}
          style={{
            background: `url(${MainImage}) center center/cover no-repeat`,
          }}
        >
          <div className={classNames.qrSection}>
            <img className={classNames.qrBox} src={bigQR} alt="QR not found" />
            <p className={classNames.qrText}>Scan for the Menu</p>
          </div>     
        </div>
        <div className={classNames.events}><Title text="Events" />
          <div className={classNames.monthly}>
            {events.map(
              (item) =>
                item.variant === 'monthly' && (
                  <EventCard
                    key={item.id}
                    width="580px"
                    height="330px"
                    date={item.date}
                    place={item.place}
                    name={item.name}
                    img={item.img}
                  />
                )
            )}
            <SeeAllButton link="/events" />
          </div>
        </div>
        
        
        <div className={classNames.gallery}>
          <ul className={classNames.galleryList}>
            <li><img src={b1} alt="Img" /></li>
            <li><img src={b2} alt="Img" /></li>
            <li><img src={b3} alt="Img" /></li>
            <li><img src={b4} alt="Img" /></li>
          </ul>
        </div>

        <div className={classNames.gallery}>
          <ul className={classNames.galleryList}>
            <li><img src={bf_1} alt="Img" /></li>
            <li><img src={bf_2} alt="Img" /></li>
            <li><img src={bf_3} alt="Img" /></li>
            <li><img src={bf_4} alt="Img" /></li>
          </ul>
        </div>

        <div className={classNames.contactsContainer}>
          <Title text="Contacts" />
          <div className={classNames.contactSection}>
            <img className={classNames.ImageBlock} src={contacts} alt="subscribeImage"/>
            <div className={classNames.contactsBlock}>
              <div className={classNames.left}>
                <ul className={classNames.DescriptionBlock}>
                  <li>
                    <h3 className={classNames.contactsTitle}>Contacts</h3>
                  </li>
                  <li>
                    <p className={classNames.contactsItem}>{contactCardInfo.tel}</p>
                  </li>
                  <li>
                    <p className={classNames.contactsItem}>Mail: {contactCardInfo.email}</p>
                  </li>
                  <li>
                    <p className={classNames.contactsItem}>Address: {contactCardInfo.address}</p>
                  </li>
                </ul>
                <div className={classNames.contacts}>
                  <p className={classNames.contactsTitle}>Social Media</p>
                  <ul className={classNames.sociallist}>
                    {
                      <li><a href="www.instagram.com" target='_blank' rel="noreferrer"><img className={classNames.socialImg}  src={instagram} alt="" /></a></li>
                    }  
                    {
                      <li><a href="www.facebook.com" target='_blank' rel="noreferrer"><img className={classNames.socialFacebookImg} src={facebook} alt="" /></a></li>
                    }
                    {
                      <li><a href="www.youtube.com" target='_blank' rel="noreferrer"><img className={classNames.socialImg}  src={youtube} alt="" /></a></li>
                    }
                  </ul>
                </div>
              </div>
              <ul className={classNames.timeBlock}>
                <li>
                  <h3 className={classNames.contactsTitle}>Working Hours</h3>
                </li>
                <li>
                  <p className={classNames.contactsItem}>{contactCardInfo.time.timeText1}</p>
                </li>
              </ul>
            </div>
        </div>
      </div>
        <div className={classNames.opContainer}>
          <Title text="Opportunities" />
          <div className={classNames.opSection}>
            <div className={classNames.opBlock}>
              <img className={classNames.opImage} src={joinUs} alt="subscribeImage"/>
              <div className={classNames.opDescription}>
                <h3 className={classNames.opTitle}>Join our happy <br/> team</h3>
                <ul className={classNames.opList}>
                  <li className={classNames.opItem}>We are looking for</li>
                  <li className={classNames.opItem}>Waiter/waitress</li>
                  <li className={classNames.opItem}>Manager</li>
                  <li className={classNames.opItem}>Cook</li>
                </ul>
                <Link to = '/apply-job'><button className={classNames.opButton}>Apply</button></Link>
              </div>
            </div>
            <div className={classNames.opBlock}>
              <img className={classNames.opImage} src={reserve} alt="subscribeImage"/>
              <div className={classNames.opDescription}>
                <div>
                  <h3 className={classNames.opTitle}>Reserve <br/> photoshooting</h3>
                  <p className={classNames.disc}> Description of the <br/> place advantages</p>
                  <p className={classNames.contactsItem_2}>{contactCardInfo.tel}</p>
                  <p className={classNames.contactsItem_2}>Address: {contactCardInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer contactRef={contactRef}/>
    </div>
  );
};

export default Beach;
