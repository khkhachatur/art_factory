import React from 'react';

import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';
import ArtistGallery from '../../components/ArtistGallery/ArtistGallery';

import Work_01 from '../../images/ArtistsPage/Work_01.png'
import Work_02 from '../../images/ArtistsPage/Work_02.png'
import Work_03 from '../../images/ArtistsPage/Work_03.png'
import Work_04 from '../../images/ArtistsPage/Work_04.png'

import { artists } from '../../db/dataBase';

import useStyles from './styles';
import Footer from '../../components/Footer';


const ArtWorksPage = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Events" navToTo="Artist Name" />

        <div className={classNames.topSection}>
          <div className={classNames.slider}>
          </div>
          <ul className={classNames.list}>
            <li className={classNames.title}>Name and Year</li>
            <li className={classNames.item}>By Artist Name</li>
            <li className={classNames.item}>Size</li>
            <li className={classNames.item}>Material</li>
            <li className={classNames.item}><strong>Price</strong></li>
            <li className={classNames.item}><button>Request to buy</button></li>
          </ul>
        </div> 
        <div className={classNames.about}>
          <Title text="About Artwork" />
          <p className={classNames.aboutText}>Born in Baghdad and raised in Kuwait, Fahar is familiar with the reality of life in a society that is characterized by insecurity and homelessness. The search for protection and security play an essential role in the everyday life of people in the Middle East and thus became the central theme of his painting. Since 2009, Al-Salih has been creating works under the title “Shelter”, a series of images that has since been an essential part of his painterly work and an examination of his roots, but also a primeval human desire. Over the years, the series developed into a homage to art itself, to painting, which became his retreat and home.</p>

        </div>
        <div className={classNames.works}>
          <Title text="Other Works of Artist Name" />
          <div className={classNames.workHolder}>
            <img className={classNames.workImg} src={Work_01} alt="Img Not Found" />
            <img className={classNames.workImg} src={Work_02} alt="Img Not Found" />
            <img className={classNames.workImg} src={Work_03} alt="Img Not Found" />
            <img className={classNames.workImg} src={Work_04} alt="Img Not Found" />
          </div>
          <div className={classNames.buttonHolder}>
            <SeeAllButton link="" />
          </div>
        </div>
        <div className={classNames.other}>
          <Title text="Works of Other Artists" />
          <div className={classNames.otherHolder}>
            {artists.map(
                (item) => 
                  <ArtistGallery
                    key={item.id}
                    width="600px"
                    artistName={item.artistName}
                    position={item.position}
                    country={item.country}
                    DBimg = {item.artistImg}
                  />
            )
            }
          </div>
          <div className={classNames.buttonHolder}>
            <SeeAllButton link="" />
          </div>
        </div>
          
        </div>
      <Footer/>
    </div>
  );
};

export default  ArtWorksPage;
