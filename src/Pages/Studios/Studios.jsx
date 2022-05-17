import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';

import MainImage from '../../images/Studios/studios-top.jpg';

import useStyles from './styles';
import Footer from '../../components/Footer';
import ArtistGallery from '../../components/ArtistGallery/ArtistGallery';


const Studios = () => {
  const classNames = useStyles();
  

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
      <Navigation navTo="Studios" />
        <div
          className={classNames.mainImage}
          style={{
            background: `url(${MainImage}) center center/cover no-repeat`,
          }}
        >
          <div className={classNames.buttonsContainer}>
            <div className={classNames.buttonContainer}>
              <button className={classNames.button}>
                <div className={classNames.aboutUsLink}>
                Learn More
                </div>
              </button>
            </div>
            <div className={classnames(classNames.buttonContainer, classNames.primaryButton)}>
              <button className={classnames(classNames.button, classNames.buttonPrimary)}>
                <Link className={classNames.aboutUsLinkPrimary} to="aboutus">
                  Rent a Studio
                </Link>
              </button>
              </div>
          </div>
        </div>
        
        <Title text={'Residents'} />
        <div className={classNames.event}>
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
          <SeeAllButton link="/artists" />
        </div>


        </div>
      <Footer/>
    </div>
  );
};

export default Studios;