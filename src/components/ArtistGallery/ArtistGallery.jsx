import { Link } from 'react-router-dom';
import React from 'react';

import Artist_1 from '../../images/latitude/Artist_02.jpg'
import ArtisWork_1 from '../../images/ArtistsPage/ArtisWork_1.jpg'
import ArtisWork_2 from '../../images/ArtistsPage/ArtisWork_2.jpg'
import ArtisWork_3 from '../../images/ArtistsPage/ArtisWork_3.jpg'

import useStyles from './styles';

const ArtistGallery = ({ name, position, country, artistPic}) => {
  const classNames = useStyles({});
  return (
  <div className={classNames.artistCard}>
    <Link to='/artist-page'>
      <div className={classNames.artist}>
        <img className={classNames.artistImg} src={Artist_1} alt="" />
        <ul className={classNames.discription}>
          <li className={classNames.name}>{name}</li>
          <li className={classNames.position}>{position}</li>
          <li className={classNames.country}>{country}</li>
        </ul>
      </div>
    </Link>
    <ul className={classNames.artistGallery}>
      <li className={classNames.artistGalleryItem}><img src={ArtisWork_1} alt="IMG" /></li>
      <li className={classNames.artistGalleryItem}><img src={ArtisWork_2} alt="IMG" /></li>
      <li className={classNames.artistGalleryItem}><img src={ArtisWork_3} alt="IMG" /></li>
    </ul>
  </div>
    
  );
};

export default ArtistGallery;
