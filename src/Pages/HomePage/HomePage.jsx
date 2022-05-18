import { useState } from 'react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { events, contactCard, shopCard  } from '../../db/dataBase';

import Title from '../../components/Title/Title';
import Modal from '../../components/Modal/Modal';
import ShopCard from '../../components/ShopCard/ShopCard';
import EventCard from '../../components/EventCard/EventCard';
import ContactCard from '../../components/ContactCard/ContactCard';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';
import DiscriptionBlock from '../../components/DiscriptionBlock/DiscriptionBlock';

import MainImage from '../../images/hometop.jpg';
import img from '../../images/subscribe-here.jpg';


import useStyles from './styles';
import Footer from '../../components/Footer';


const HomePage = () => {
const contactRef = useRef();

  const [openModal, setOpenModal] = useState(false)

  const classNames = useStyles();
 
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
          className={classNames.mainImage}
          style={{
            background: `url(${MainImage}) center center/cover no-repeat`,
          }}
        >
          <div className={classNames.buttonContainer}>
            <button onClick={() => setOpenModal(true)} className={classNames.button}>
              <div className={classNames.aboutUsLink} >About us</div>
            </button>
          </div>
          
        </div>
        <div className={classNames.linksContainer}>
          <Title text={'What you can find in ArtFactory?'} />
          <div className={classNames.linksHolder}>
            <button className={classNames.linksBlock}>
              <Link className={classNames.linksText} to="/beach">
                The Beach
              </Link>
            </button>
            <button className={classNames.linksBlock}>
              <Link className={classNames.linksText} to="/studios">
                Studios
              </Link>
            </button>
            <button className={classNames.linksBlock}>
              <Link className={classNames.linksText} to="/latitude">
                Latitude
              </Link>
            </button>
            <button className={classNames.linksBlock}>
              <Link className={classNames.linksText} to="/">
                A1
              </Link>
            </button>
            {/* <button className={classNames.linksBlock}>
              <Link className={classNames.linksText} to="fabios">
                The deck & Pizza
              </Link>
            </button> */}
          </div>
        </div>
        <div className={classNames.commingSoonSection}>
          <Title text={'Comming soon in ArtFactory'} />
          {events.map(
          (item) =>
            item.variant === 'weekly' && (
              <EventCard
                key={item.id}
                width="700px"
                height="400px"
                date={item.date}
                place={item.place}
                name={item.name}
                img={item.img}
              />
            )
        )}
        <SeeAllButton link="events" />
        </div>
        <div className={classNames.shopContainer}>
          <Title text={'Shop'} />
          <div className={classNames.shopSection}>
              {shopCard.map(
              (item) =>
                  <ShopCard
                    key={item.id}
                    creatorName={item.creatorName}
                    itemName={item.itemName}
                    year={item.year}
                    price={item.price}
                    shopImg={item.itemImg}
                  />
            )}
          </div>
          <div className={classNames.buttonHolder}>
            <SeeAllButton link="/shop" />
          </div>
        </div>
        <div className={classNames.subscribe} ref={contactRef}>
        <DiscriptionBlock
            title='Know about our events and news first!'
            text='Don’t miss our  events including exhibitions, fashion shows, parties, workshops and educational programs!'
            buttonText='Subscribe'
            DBimg={img}
          />
        </div>
        <div id='#contacts' className={classNames.contactSection} >
         <Title text={'Contacts'} />
          <div className={classNames.contactHolder}>
           {contactCard.map(({id,title, time, address,floor,tel,email,social}) => (
            <ContactCard
              key={id}
              title={title}
              time={time}
              address={address}
              floor={floor}
              tel={tel}
              email={email}
              social={social}
            />
           ))}
            
          </div>
         
        
        </div>
        <div className={classNames.mapsection}>
              <div className={classNames.mapitem}>
                  
                  {/* <p className={classNames.mapadress}>Vahagni Taghamas, Ashtarak Highway 7, 0021 Yerevan</p> */}
              </div>
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
      <Footer contactRef={contactRef}/>
    </div>
  );
};

export default HomePage;
