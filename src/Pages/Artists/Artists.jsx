import React from 'react';

import Title from '../../components/Title/Title';
import ArtistGallery from '../../components/ArtistGallery/ArtistGallery';
import Navigation from '../../components/Navigation/Navigation';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';

import useStyles from './styles';
import Footer from '../../components/Footer';


const Artists = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Artists" />
        <Title text="Meet Our Artists" />
        <ArtistGallery
        name='Vardan Hakobian'
        position='Painter'
        country='Armenia'
        />
        <ArtistGallery
        name='Vardan Hakobian'
        position='Painter'
        country='Armenia'
        />
        <ArtistGallery
        name='Vardan Hakobian'
        position='Painter'
        country='Armenia'
        />
        <ArtistGallery
        name='Vardan Hakobian'
        position='Painter'
        country='Armenia'
        />
        <ArtistGallery
        name='Vardan Hakobian'
        position='Painter'
        country='Armenia'
        />
        <ArtistGallery
        name='Vardan Hakobian'
        position='Painter'
        country='Armenia'
        />
      </div>
      <div className={classNames.buttonHolder}>
        <SeeAllButton link="" />  
      </div>
      <Footer/>
    </div>
  );
};

export default Artists;
