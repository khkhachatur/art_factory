import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import { events, artists } from '../../db/dataBase';

import Title from '../../components/Title/Title';
import Modal from '../../components/Modal/Modal';
import EventCard from '../../components/EventCard/EventCard';
import Navigation from '../../components/Navigation/Navigation';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';
import DiscriptionBlock from '../../components/DiscriptionBlock/DiscriptionBlock';

import L1 from '../../images/latitude/L1.png';
import L2 from '../../images/latitude/L2.png';
import L3 from '../../images/latitude/L3.png';
import L4 from '../../images/latitude/L4.png';
import img from '../../images/latitude/JBAF.png';
import MainImage from '../../images/latitude/latitudeHome.png';

import useStyles from './styles';
import Footer from '../../components/Footer';


const Latitude = () => {
  const classNames = useStyles();
  

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
      <Navigation navTo="Latitude" />
        <div
          className={classNames.mainImage}
          style={{
            background: `url(${MainImage}) center center/cover no-repeat`,
          }}
        >
          <div className={classNames.buttonsContainer}>
            <div className={classNames.buttonContainer}>
              <button className={classNames.button}>
                <div className={classNames.aboutUsLink}>
                <Modal
                  title='About Latitude'
                  text='Founded in order to give space and support to Armenian artists—local and diasporic alike—Latitude emanates a spirited and youthful energy that is cultivated through innovation and collaboration. 
                  Our space is dedicated to the celebration of Armenian artists through international exhibitions, workshops, and educational programs.
                  Since November of 2019, Latitude’s mission has been to serve young artists and reinforce the development of the arts world in Armenia. '
                />
                </div>
              </button>
            </div>
            <div className={classnames(classNames.buttonContainer, classNames.primaryButton)}>
              <button className={classnames(classNames.button, classNames.buttonPrimary)}>
                <Link className={classNames.aboutUsLinkPrimary} to="aboutus">
                  Rent the gallery
                </Link>
              </button>
              </div>
          </div>
        </div>
        
        <Title text={'Events'} />
        <div className={classNames.event}>
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
        <div className={classNames.gallery}>
          <ul className={classNames.galleryList}>
            <li><img src={L1} alt="Img" /></li>
            <li><img src={L2} alt="Img" /></li>
            <li><img src={L3} alt="Img" /></li>
            <li><img src={L4} alt="Img" /></li>
          </ul>
        </div>
        <Title text={'YBAF Artists'} />
        <div className={classNames.artistsBlock}>
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
        <div className={classNames.buttonHolder}>
         <SeeAllButton link="/artists" />
        </div>
        <div className={classNames.JbafSection}>
          <DiscriptionBlock
            title='Become An YBAF Artist'
            text='YBAF hosts a wide range of programs and activities, including, but not limited to exhibitions, shows, workshops, and lectures in fields such as visual art, literature, music, fashion, etc. '
            buttonText='Apply'
            DBimg={img}

          />
        </div>
        <Title text={'Past Events'} />
        <div className={classNames.pastEvents}>
          {events.map(
              (item) =>
                item.variant === 'past' && (
                  <EventCard
                    key={item.id}
                    width="380px"
                    height="220px"
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
      <Footer/>
    </div>
  );
};

export default Latitude;
