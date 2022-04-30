import React from 'react';

import { events } from '../../db/dataBase';

import Title from '../../components/Title/Title';
import EventCard from '../../components/EventCard/EventCard';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';

import useStyles from './styles';
import Footer from '../../components/Footer';


const Events = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div className={classNames.nav}>
          <p className={classNames.navText}>Home</p>
          <p className={classNames.navText}>&rsaquo;</p>
          <p className={classNames.navText}>Events</p>
        </div>
        <Title text="Events happening this week" />
        <div className={classNames.weekly}>
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
        </div>
        <Title text="Events happening this month" />
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
        <Title text="Past events" />
        <div className={classNames.monthly}>
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
        </div>
        <div className={classNames.buttonHolder}>
          <SeeAllButton link="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
