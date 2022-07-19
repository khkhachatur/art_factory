import React from "react";

import { events, artists, contactCard } from "../../db/dataBase";

import Title from "../../components/Title/Title";
import EventCard from "../../components/EventCard/EventCard";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Navigation from "../../components/Navigation/Navigation";
import SeeAllButton from "../../components/SeeAllButton/SeeAllButton";

import youtube from "../../images/youtube1.svg";
import facebook from "../../images/facebook1.svg";
import instagram from "../../images/instagram1.svg";
import evenyImg from "../../images/events/event-main.jpg";
import contacts from "../../images/events/eventContact.png";

import useStyles from "./styles";
import Footer from "../../components/Footer";

const EventsPage = () => {
  const classNames = useStyles();

  const contactCardInfo = contactCard[1];

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Events" navToTo="Event Name" />
        <div className={classNames.topContainer}>
          <Title text="Event Name" />
          <div className={classNames.topSection}>
            <img className={classNames.mainImg} src={evenyImg} alt="" />
            <div className={classNames.description}>
              <div className={classNames.dateTimeContainer}>
                <ul className={classNames.dateTime}>
                  <li className={classNames.strong}>Data:</li>
                  <li className={classNames.strong}>Time:</li>
                </ul>
                <ul className={classNames.dateTime}>
                  <li className={classNames.text}>02 October</li>
                  <li className={classNames.text}>14:00-20:00</li>
                </ul>
              </div>
              <ul className={classNames.location}>
                <li className={classNames.strong}>Location:</li>
                <li className={classNames.text}>Ashtarak Highway 7</li>
              </ul>
              <ul className={classNames.location}>
                <li className={classNames.strong}>Founded By:</li>
                <li className={classNames.text}>
                  Swiss Agency for Development and Cooperation (SDC), Embassy of
                  Switzerland in Armenia
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classNames.aboutContainer}>
          <Title text="About" />
          <p className={classNames.aboutText}>
            The exhibition features conceptual installations and videos created
            by young <br />
            artists made of plastic waste highlighting environmental issues and
            raising public <br />
            awareness.
            <br />
            The project is funded by Swiss Agency for Development and
            Cooperation (SDC),
            <br />
            Embassy of Switzerland in Armenia.
          </p>
        </div>

        <div className={classNames.partContainer}>
          <Title text="Participants" />
          <div className={classNames.partSection}>
            {artists.map((item) => (
              <ArtistCard
                key={item.id}
                artistName={item.artistName}
                position={item.position}
                country={item.country}
                DBimg={item.artistImg}
              />
            ))}
          </div>
        </div>

        <div className={classNames.contactsContainer}>
          <Title text="Contacts" />
          <div className={classNames.contactSection}>
            <img
              className={classNames.ImageBlock}
              src={contacts}
              alt="subscribeImage"
            />
            <div className={classNames.contactsBlock}>
              <div className={classNames.left}>
                <ul className={classNames.DescriptionBlock}>
                  <li>
                    <h3 className={classNames.contactsTitle}>Contacts</h3>
                  </li>
                  <li>
                    <p className={classNames.contactsItem}>
                      {contactCardInfo.tel}
                    </p>
                  </li>
                  <li>
                    <p className={classNames.contactsItem}>
                      Mail: {contactCardInfo.email}
                    </p>
                  </li>
                  <li>
                    <p className={classNames.contactsItem}>
                      Address: {contactCardInfo.address}
                    </p>
                  </li>
                </ul>
                <div className={classNames.contacts}>
                  <p className={classNames.contactsTitle}>Social Media</p>
                  <ul className={classNames.sociallist}>
                    {
                      <li>
                        <a
                          href="www.instagram.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className={classNames.socialImg}
                            src={instagram}
                            alt=""
                          />
                        </a>
                      </li>
                    }
                    {
                      <li>
                        <a
                          href="www.facebook.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className={classNames.socialFacebookImg}
                            src={facebook}
                            alt=""
                          />
                        </a>
                      </li>
                    }
                    {
                      <li>
                        <a
                          href="www.youtube.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className={classNames.socialImg}
                            src={youtube}
                            alt=""
                          />
                        </a>
                      </li>
                    }
                  </ul>
                </div>
              </div>
              <ul className={classNames.timeBlock}>
                <li>
                  <h3 className={classNames.contactsTitle}>Working Hours</h3>
                </li>
                <li>
                  <p className={classNames.contactsItem}>
                    {contactCardInfo.time.timeText1}
                  </p>
                </li>
                <li>
                  <p className={classNames.contactsItem}>
                    {contactCardInfo.time.timeText2}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Title text="See other events" />
        <div className={classNames.monthly}>
          {events.map(
            (item) =>
              item.variant === "monthly" && (
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
      <Footer />
    </div>
  );
};

export default EventsPage;
