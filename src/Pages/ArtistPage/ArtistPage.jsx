import React from 'react';

import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';

import Artist_1 from '../../images/latitude/Artist_02.jpg'
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

import { artists } from '../../db/dataBase';

import useStyles from './styles';
import Footer from '../../components/Footer';


const ArtistPage = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Events" navToTo="Artist Name" />
        <div className={classNames.topContainer}>
          <div className={classNames.artist}>
            <img className={classNames.ArtistImg} src={Artist_1} alt="" />
            <ul className={classNames.info}>
              <li className={classNames.name}>{artists[0].artistName}</li>
              <li className={classNames.position}>{artists[0].position}</li>
              <li className={classNames.country}>{artists[0].country}</li>
            </ul>
            <ul className={classNames.contactList}>
              <li className={classNames.contactItem}>Tel: {artists[0].tel}</li>
              <li className={classNames.contactItem}>Mail: {artists[0].mail}</li>
            </ul>
          </div>
        </div>
      <div className={classNames.discription}>
        <ul className={classNames.discriptionText}>
          <Title text="Biography" style={{margin:'0'}}/>
          <p className={classNames.discriptionSubText} style={{margin:'red'}}>{artists[0].biography}</p>
          <Title text="Education" />
          <ul className={classNames.discriptionList}>
            <li><p className={classNames.discriptionSubText}>{artists[0].education.education1}</p></li>
            <li><p className={classNames.discriptionSubText}>{artists[0].education.education2}</p></li>
          </ul>
          <Title text="Exhibitions" />
          <ul className={classNames.discriptionList}>
            <li><p className={classNames.discriptionSubText_02}>{artists[0].exhibitions.exhibitions1}</p></li>
            <li><p className={classNames.discriptionSubText_02}>{artists[0].exhibitions.exhibitions2}</p></li>
          </ul>
        </ul>
          <div className={classNames.discriptionImages}>
            <img className={classNames.descrImg} src={ArtistImg_01} alt="IMG Not Found" />
            <img className={classNames.descrImg} src={ArtistImg_03} alt="IMG Not Found" />
            <img className={classNames.descrImg} src={ArtistImg_02} alt="IMG Not Found" />
          </div>
      </div>  
      <div className={classNames.articles}>
        <Title text="Articles" />
        <ul className={classNames.artList}>
          <a className={classNames.artLink} href={artists[0].articles.articles1} rel="noreferrer" target='_blank'>{artists[0].articles.articles1}</a>
          <a className={classNames.artLink} href={artists[0].articles.articles2} rel="noreferrer" target='_blank'>{artists[0].articles.articles2}</a>
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
