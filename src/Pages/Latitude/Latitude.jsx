import React from 'react';
import { useState } from 'react';
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

  const [openModal, setOpenModal] = useState(false)
  

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
            <button onClick={() => setOpenModal(true)} className={classNames.button}>
              <div className={classNames.aboutUsLink} >About us</div>
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
        <div className={classNames.modal}>
        {openModal && <Modal 
                    closeModal={setOpenModal}
                    title='About ArtFactory'
                    text='Since its establishment in 2019, the Art Factory has grown into a multi-dimensional enclave full of art, food, functioning studio spaces, shopping, and entertainment. We are happy to provide artists a space to showcase their creativity to a community full of art-goers, pizza enthusiasts, and beach lovers alike. Our collective is located in a dreamy warehouse in Vahagny.

                    On the first floor, you will find introspective art exhibitions featuring works from local artists; you will also find The Deck & Pizza, a pizzeria that combines artisan techniques with soul-nourishing, made-with-love-by-Nonna-type Italian authenticity.
                    
                    Venture to the rooftop to find The Beach, a tropical space with sand and breeze, panoramic mountain views, a fresh menu, and summer cocktails all year round.
                    
                    And in-between the first and top floor, Art Factory offers private spaces perfect for art/photography studios or creative office use.'
                  />}
      </div>
      <Footer/>
    </div>
  );
};

export default Latitude;
