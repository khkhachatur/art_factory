import React from 'react';

import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';
import ArtistGallery from '../../components/ArtistGallery/ArtistGallery';

import Work_01 from '../../images/ArtistsPage/Work_01.png'
import Work_02 from '../../images/ArtistsPage/Work_02.png'
import Work_03 from '../../images/ArtistsPage/Work_03.png'
import Work_04 from '../../images/ArtistsPage/Work_04.png'
import collImg_01 from '../../images/ArtistsPage/collection_01.png'
import collImg_02 from '../../images/ArtistsPage/collection_02.png'
import collImg_03 from '../../images/ArtistsPage/collection_03.png'
import collImg_04 from '../../images/ArtistsPage/collection_04.png'
import ArtistImg_01 from '../../images/ArtistsPage/ArtistImg_01.png'
import ArtistImg_02 from '../../images/ArtistsPage/ArtistImg_02.png'
import ArtistImg_03 from '../../images/ArtistsPage/ArtistImg_03.png'

import useStyles from './styles';
import Footer from '../../components/Footer';
import { Link } from '@material-ui/core';


const ArtistPage = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Events" navToTo="Artist Name" />
        <div className={classNames.topContainer}>
          <ArtistGallery
          name='Vardan Hakobian'
          position='Painter'
          country='Armenia'
          />
        </div>
      <div className={classNames.discription}>
        <ul className={classNames.discriptionText}>
          <Title text="Biography" style={{margin:'0'}}/>
          <p className={classNames.discriptionSubText} style={{margin:'red'}}>Art is that power which helps me keep dreaming and never give up. All my life, as I remember myself, I preferred drawing to all other activities. At first I studied at an art school, then at a lyceum at the Academy of Arts. In 2009, I graduated from the Academy of Fine Arts with a degree in architecture. The knowledge gained helped me broaden my horizons. As an architect, I was lucky to take part in the archaeological expeditions of the Hermitage on ancient and medieval monuments.</p>
          <Title text="Education" />
          <ul className={classNames.discriptionList}>
            <li><p className={classNames.discriptionSubText}>Yerevan Art Institute 2000-2006</p></li>
            <li><p className={classNames.discriptionSubText}>Royal Collage of Art, England 2006-2008</p></li>
          </ul>
          <Title text="Exhibitions" />
          <ul className={classNames.discriptionList}>
            <li><p className={classNames.discriptionSubText_02}>March 2010 'Spring Fever', exhibition of emerging artists. Hyatt Regency - Yerevan, Armenia</p></li>
            <li><p className={classNames.discriptionSubText_02}>March 2014 'Spring Fever', exhibition of emerging artists from Saatchi Art. Hyatt Regency London - The Churchill, London, UK</p></li>
          </ul>
        </ul>
        {/* <div classNames={classNames.imgHolder}> */}
          <div className={classNames.discriptionImages}>
            <img className={classNames.descrImg} src={ArtistImg_01} alt="IMG Not Found" />
            <img className={classNames.descrImg} src={ArtistImg_03} alt="IMG Not Found" />
            <img className={classNames.descrImg} src={ArtistImg_02} alt="IMG Not Found" />
          {/* </div> */}
        </div>
      </div>  
      <div className={classNames.articles}>
        <Title text="Articles" />
        <ul className={classNames.artList}>
          <a className={classNames.artLink} href="https://www.theartnewspaper.com/interview/tess-jaray-interview" target='_blank'>https://www.theartnewspaper.com</a>
          <a className={classNames.artLink} href="https://greatergood.berkeley.edu/article/item/why_we_make_art" target='_blank'>https://greatergood.berkeley.edu/article/item/why_we_make_art</a>
        </ul>
      </div>
      <div className={classNames.collections}>
        <Title text="Collections" />
        <div className={classNames.collHolder}>
          <div className={classNames.subCollHolder}>
            <img className={classNames.collImg} src={collImg_01} alt="Img Not Found" />
            <img className={classNames.collImg} src={collImg_02} alt="Img Not Found" />
            <img className={classNames.collImg} src={collImg_03} alt="Img Not Found" />
            <img className={classNames.collImg} src={collImg_04} alt="Img Not Found" />
            <div className={classNames.collDescription}>
              <p className={classNames.title}>Life from other side</p>
              <p className={classNames.year}>2009</p>
            </div>
          </div>
          <div className={classNames.subCollHolder}>
            <img className={classNames.collImg} src={collImg_01} alt="Img Not Found" />
            <img className={classNames.collImg} src={collImg_02} alt="Img Not Found" />
            <img className={classNames.collImg} src={collImg_03} alt="Img Not Found" />
            <img className={classNames.collImg} src={collImg_04} alt="Img Not Found" />
            <div className={classNames.collDescription}>
              <p className={classNames.title}>Colors of my life</p>
              <p className={classNames.year}>2015</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className={classNames.works}>
        <Title text="Works" />
        <div className={classNames.workHolder}>
          <img className={classNames.workImg} src={Work_01} alt="Img Not Found" />
          <img className={classNames.workImg} src={Work_02} alt="Img Not Found" />
          <img className={classNames.workImg} src={Work_03} alt="Img Not Found" />
          <img className={classNames.workImg} src={Work_04} alt="Img Not Found" />
        </div>
      </div>
        
      </div>
        <div className={classNames.buttonHolder}>
          <SeeAllButton link="" />
        </div>
      <Footer/>
    </div>
  );
};

export default ArtistPage;
