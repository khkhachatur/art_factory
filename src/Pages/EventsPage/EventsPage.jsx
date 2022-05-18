import React from 'react';

import { events, artists } from '../../db/dataBase';

import Title from '../../components/Title/Title';
import EventCard from '../../components/EventCard/EventCard';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import Navigation from '../../components/Navigation/Navigation';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';

import evenyImg from '../../images/events/event-main.jpg'
import contacts from '../../images/events/eventContact.png';


import useStyles from './styles';
import Footer from '../../components/Footer';


const EventsPage = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Events" navToTo="Event Name" />
        <div className={classNames.topContainer}>
          <Title text="Event Name" />
          <div className={classNames.topSection}>
            <img src={evenyImg} alt="" />
            <ul className={classNames.topList}>
              <li className={classNames.topItem}><strong>Date:</strong>02 October</li>
              <li className={classNames.topItem}><strong>Time:</strong>14:00-20:00</li>
              <li className={classNames.topItem}><strong>Location:</strong>Ashtarak Highway 7 </li>
              <li className={classNames.topItem}><strong>Founded By:</strong>Swiss Agency for 
                                                                                   Development and
                                                                                  Cooperation (SDC),
                                                                                  Embassy of Switzerland
                                                                                  in Armenia</li>
            </ul>
          </div>
        </div>
        <div className={classNames.aboutContainer}>
          <Title text="About" />
          <p className={classNames.aboutText}>The exhibition features conceptual installations and videos created by young <br/>
          artists made of plastic waste  highlighting environmental issues and raising public <br/>
          awareness.<br/>
          The project is funded by Swiss Agency for Development and Cooperation (SDC),<br/>
          Embassy of Switzerland in Armenia.</p>

        </div>

        <div className={classNames.partContainer}>
          <Title text="Participants" />
          <div className={classNames.partSection}>
            {artists.map(
              (item) => 
                <ArtistCard
                  key={item.id}
                  artistName={item.artistName}
                  position={item.position}
                  country={item.country}
                  DBimg = {item.artistImg}
                />
          )
          }
          </div>
        </div>

        <div className={classNames.contactsContainer}>
          <Title text="Contacts" />
          <div className={classNames.contactSection}>
            <img className={classNames.ImageBlock} src={contacts} alt="subscribeImage"/>
            <div className={classNames.DescriptionBlock}>
            {/* {events.map(
            (item) =>
              
          )} */}
          </div>
        </div>
        </div>
        
        <Title text="See other events" />
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
        </div>
        
        <div className={classNames.buttonHolder}>
          <SeeAllButton link="/events" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EventsPage;
 