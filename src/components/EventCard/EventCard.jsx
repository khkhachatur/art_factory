import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import EventArrow from "../../images/interface/event-arrow.svg";

const EventCard = ({
  width,
  height,
  variant,
  date,
  time,
  place,
  name,
  foundedBy,
  about1,
  about2,
  partisipent1,
  partisipent2,
  partisipent3,
  partisipent4,
  partisipent5,
  img,
  itemId,
}) => {
  const classNames = useStyles({ width, height });

  console.log(itemId);

  return (
    <div
      className={classNames.container}
      style={{ background: `url(${img}) center center/cover no-repeat` }}
    >
      <div className={classNames.descriptionContainer}>
        <div className={classNames.dateBlock}>
          <p className={classNames.date}>
            {date} <br /> <span className={classNames.place}>{place}</span>{" "}
          </p>
        </div>
        <div className={classNames.nameBlock}>
          <p className={classNames.name}>{name}</p>
          <Link
            className={classNames.arrowIcon}
            style={{
              background: `url(${EventArrow}) center center/cover no-repeat`,
            }}
            to={`/events-page/${itemId}`}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
