
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const ArtistCard = ({ artistName, position, country, DBimg}) => {
  const classNames = useStyles({});
  return (
    <div className={classNames.container}
    style={{ background: `url(${DBimg}) center center/cover no-repeat` }}
    > 
      <Link to='/artist-page'>
        <div className={classNames.descriptionContainer}>
          <p className={classNames.name}>{artistName}</p>
          <p className={classNames.position}>{position}</p>
          <p className={classNames.country}>{country}</p>
        </div>
      </Link>   
    </div>
  );
};

export default ArtistCard;
