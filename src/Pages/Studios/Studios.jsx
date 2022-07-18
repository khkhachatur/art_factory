import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import Modal from '../../components/Modal/Modal';
import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';

import MainImage from '../../images/Studios/studios-top.jpg';

import { useState } from 'react';
import useStyles from './styles';
import { artists } from '../../db/dataBase';
import Footer from '../../components/Footer';
import ArtistGallery from '../../components/ArtistGallery/ArtistGallery';


const Studios = () => {
  const classNames = useStyles();
  
  const [openModal, setOpenModal] = useState(false)

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
              <button onClick={() => setOpenModal(true)} className={classNames.button}>
                <div className={classNames.aboutUsLink}>
                Learn More 
                </div>
              </button>
            </div>
            <div className={classnames(classNames.buttonContainer, classNames.primaryButton)}>
              <button className={classnames(classNames.button, classNames.buttonPrimary)}>
                <Link className={classNames.aboutUsLinkPrimary} to="/apply-form">
                  Rent a Studio
                </Link>
              </button>
              </div>
          </div>
        </div>
        <Title text={'Residents'} />
        <div>
        {artists.slice(0,4).map(({id, artistName, position, country}) => {
            return(
              <ArtistGallery
                key={id}
                artistName={artistName}
                position={position}
                country={country}
              />
            );
        })}
        </div>
          <div className={classNames.buttonHolder}><SeeAllButton link="/artists" /></div>
        </div>
        <div className={classNames.modal}>
        {openModal && <Modal
          closeModal={setOpenModal}
          title='About Studuios'
          text='Art Factory provides a multi-functional space and community to Yerevan-based creatives. 
          We have a variety of studio spaces available to rent, all equipped with lighting, electricity, a wash closet and a shower. 
          Our nine studios are home to artists at all stages of their careers, working across all mediums. '
        />}     
      </div>
      <Footer/>
    </div>
      );
};

export default Studios;
