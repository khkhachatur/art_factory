
import React from 'react';
import { Link } from 'react-router-dom';
// import artistImg from '../../images/latitude/Artist_01.jpg'
import useStyles from './styles';

const ArtistCard = ({ artistName, position, country, DBimg}) => {
  const classNames = useStyles({});
  return (
    <div
      className={classNames.container}
      style={{ background: `url(${DBimg}) center center/cover no-repeat` }}
    >
      <div className={classNames.descriptionContainer}>
        <p className={classNames.name}>{artistName}</p>
        <p className={classNames.position}>{position}</p>
        <p className={classNames.country}>{country}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
