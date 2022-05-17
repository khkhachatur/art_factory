import React from 'react';

import { } from '../../db/dataBase';

import Navigation from '../../components/Navigation/Navigation';
import ShopGallery from '../../components/ShopGallery/ShopGallery';

import useStyles from './styles';
import Footer from '../../components/Footer';


const Shop = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Shop" />
        <div className={classNames.filterSection}>
        </div>
        <div className={classNames.shopSection}>
          <ShopGallery/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
