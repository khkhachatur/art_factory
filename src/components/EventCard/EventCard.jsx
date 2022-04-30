
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import EventArrow from '../../images/interface/event-arrow.svg';

const EventCard = ({ width, height, date, place, name, img }) => {
  const classNames = useStyles({ width, height });
  return (
    <div
      className={classNames.container}
      style={{ background: `url(${img}) center center/cover no-repeat` }}
    >
      <div className={classNames.descriptionContainer}>
        <div className={classNames.dateBlock}>
          <p className={classNames.date}>
            {date} <br /> <span className={classNames.place}>{place}</span>{' '}
          </p>
        </div>
        <div className={classNames.nameBlock}>
          <p className={classNames.name}>{name}</p>
          <Link
            className={classNames.arrowIcon}
            style={{
              background: `url(${EventArrow}) center center/cover no-repeat`,
            }}
            to="#"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
