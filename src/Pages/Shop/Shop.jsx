import React from 'react';

// import { shopCard  } from '../../db/dataBase';

import Navigation from '../../components/Navigation/Navigation';
import ShopGallery from '../../components/ShopGallery/ShopGallery';

// import { useState } from 'react';
import useStyles from './styles';
import Footer from '../../components/Footer';


const Shop = () => {
  
  // const [searchTerm, setSearchTerm] = useState('')

  const classNames = useStyles();

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Shop" />
        <div className={classNames.filterSection}>
          <button>Filter</button>
          <div className={classNames.searchSection}>
            <input 
              type="text" 
              placeholder="Search by name" 
              // onChange={(event) => {
              //   setSearchTerm(event.target.value);
              // }} 
              style={
                {opacity:'0.7',
                width:'350px',
                height:'40px', 
                fontSize:'24px',
                fontWeight:'400'
            }}/>
          </div>
        </div>
        <div className={classNames.shopSection}>
        {/* {shopCard.filter((val) => { 
          if (setSearchTerm === "")  {
            return val
          }else if (val.creatorName.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map(({}) => {
            return(
              <ShopGallery
              />
            );
        })} */}
          <ShopGallery/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
 