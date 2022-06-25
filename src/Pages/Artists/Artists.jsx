import React, {useState} from 'react';

import Footer from '../../components/Footer';
import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';
import SeeAllButton from '../../components/SeeAllButton/SeeAllButton';
import ArtistGallery from '../../components/ArtistGallery/ArtistGallery';

import { artists } from '../../db/dataBase';

import useStyles from './styles';


const Artists = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Artists" />
        <div className={classNames.titleBox}>
          <Title text="Meet Our Artists" />
          <input 
            type="text" 
            placeholder="Search by name" 
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }} 
            style={
              {opacity:'0.7',
              width:'350px',
              height:'40px', 
              fontSize:'24px',
              fontWeight:'400'
          }}/>
        </div>
         {artists.filter((val) => { 
          if (setSearchTerm === "")  {
            return val
          }else if (val.artistName.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map(({id, artistName, position, country}) => {
            return(
              <ArtistGallery
                key={id}
                artistName={artistName}
                position={position}
                country={country}
                // DBimg = {artistImg}
              />
            );
        })}
      </div>
      <div className={classNames.buttonHolder}>
        <SeeAllButton link="" />  
      </div>
      <Footer/>
    </div>
  );
};

export default Artists;
