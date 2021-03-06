import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import { events, contactCard, shopCard } from "../../db/dataBase";

import Title from "../../components/Title/Title";
import Modal from "../../components/Modal/Modal";
import ShopCard from "../../components/ShopCard/ShopCard";
import EventCard from "../../components/EventCard/EventCard";
import ContactCard from "../../components/ContactCard/ContactCard";
import SeeAllButton from "../../components/SeeAllButton/SeeAllButton";
import DiscriptionBlockModal from "../../components/DiscriptionBlockModal/DiscriptionBlockModal";

import MainImage from "../../images/hometop.jpg";
import img from "../../images/subscribe-here.jpg";
import beach from "../../images/logos/theBeachSvg.svg";
import a1 from "../../images/logos/A1_Black-01.png";
import latitude from "../../images/logos/latitidePng.png";

import { useState } from "react";
import useStyles from "./styles";
import Footer from "../../components/Footer";

const HomePage = () => {
  const contactRef = useRef();

  const [openModal, setOpenModal] = useState(false);

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
            <button
              onClick={() => setOpenModal(true)}
              className={classNames.button}
            >
              <div className={classNames.aboutUsLink}>About us</div>
            </button>
          </div>
        </div>
        <div className={classNames.linksContainer}>
          <Title text={"What you can find in ArtFactory?"} />
          <div className={classNames.linksHolder}>
            <button className={classNames.linksBlock}>
              <Link className={classNames.linksText} to="/beach">
                <img src={beach} alt="" />
              </Link>
            </button>
            <button className={classNames.linksBlock}>
              <Link className={classNames.linksText} to="/studios">
                Art Studios
              </Link>
            </button>
            <button className={classNames.linksBlock}>
              <Link className={classNames.linksText} to="/latitude">
                <img src={latitude} alt="" />
              </Link>
            </button>
            <button
              style={{ padding: "20px 80px" }}
              className={classNames.linksBlock}
            >
              <Link className={classNames.linksText} to="/">
                <img style={{ width: "50%" }} src={a1} alt="" />
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
          <Title text={"Comming soon in ArtFactory"} />
          {events
            .slice(0)
            .map(
              (item) =>
                item.variant === "weekly" && (
                  <EventCard
                    key={item.id}
                    itemId={item.id}
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
          <Title text={"Shop"} />
          <div className={classNames.shopSection}>
            {shopCard.slice(0, 3).map((item) => (
              <ShopCard
                itemId={item.id}
                key={item.id}
                creatorName={item.creatorName}
                itemName={item.itemName}
                year={item.year}
                price={item.price}
                shopImg={item.itemImg}
              />
            ))}
          </div>
          <div className={classNames.buttonHolder}>
            <SeeAllButton link="/shop" />
          </div>
        </div>
        <div className={classNames.subscribe} ref={contactRef}>
          <DiscriptionBlockModal
            title="Know about our events and news first!"
            text="Don???t miss our  events including exhibitions, fashion shows, parties, workshops and educational programs!"
            buttonText="Subscribe"
            DBimg={img}
          />
        </div>
        <div id="#contacts" className={classNames.contactSection}>
          <Title text={"Contacts"} />
          <div className={classNames.contactHolder}>
            {contactCard.map(
              ({ id, title, time, address, floor, tel, email, social }) => (
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
              )
            )}
          </div>
        </div>
        <div className={classNames.mapsection}>
          <div className={classNames.mapitem}>
            {/* <Map google={this.props.google} zoom={14}>
                  <Marker onClick={this.onMarkerClick}
                          name={'Current location'} />

                  <InfoWindow onClose={this.onInfoWindowClose}>
                      <div>
                      </div>
                  </InfoWindow>
                </Map> */}
          </div>
        </div>
      </div>
      {openModal && (
        <div className={classNames.modal}>
          <Modal
            closeModal={setOpenModal}
            title="About ArtFactory"
            text="Since its establishment in 2019, the Art Factory has grown into a multi-dimensional enclave full of art, food, functioning studio spaces, shopping, and entertainment. We are happy to provide artists a space to showcase their creativity to a community full of art-goers, pizza enthusiasts, and beach lovers alike. Our collective is located in a dreamy warehouse in Vahagny.

                    On the first floor, you will find introspective art exhibitions featuring works from local artists; you will also find The Deck & Pizza, a pizzeria that combines artisan techniques with soul-nourishing, made-with-love-by-Nonna-type Italian authenticity.
                    
                    Venture to the rooftop to find The Beach, a tropical space with sand and breeze, panoramic mountain views, a fresh menu, and summer cocktails all year round.
                    
                    And in-between the first and top floor, Art Factory offers private spaces perfect for art/photography studios or creative office use."
          />
        </div>
      )}
      <Footer contactRef={contactRef} />
    </div>
  );
};

export default HomePage;

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAnVv56ssukzAJVUPiJwiMHY2VDzfk7mMg")
// })(HomePage)
