import React, {useState} from 'react';

// import { shopCard  } from '../../db/dataBase';

import Navigation from '../../components/Navigation/Navigation';
import ShopGallery from '../../components/ShopGallery/ShopGallery';

import smallFilter from '../../images/filterSmall.svg'
import mediumFilter from '../../images/filterMedium.svg'
import bigFilter from '../../images/filterBig.svg'

import useStyles from './styles';
import Footer from '../../components/Footer';


const Shop = () => {
  
  // const [searchTerm, setSearchTerm] = useState('')

  const [open, setOpen] =useState(false)

  const classNames = useStyles();

  const [state, setState] = useState("")

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Shop" />
        <div className={classNames.filterSection}>
          <button onClick={() => setOpen(true)} className={classNames.filter}>Filter</button>
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
        {open && (
            <div className={classNames.filterList}>
              <ul className={classNames.filterLeft}>
                <li>
                  <select className={classNames.sortBy} value = {state} onChange ={(e) => 
                  {
                    const selectedCategory = e.target.value
                    setState(selectedCategory)
                  }}>
                    <option value = "category">category1</option>
                    <option value = "category">category1</option>

                  </select>
                </li>
                <li>
                  <select className={classNames.sortBy} value = {state} onChange ={(e) => 
                  {
                    const selectedstyle = e.target.value
                    setState(selectedstyle)
                  }}>
                    <option value = "style">Style1</option>
                    <option value = "style">Style2</option>
                </select>
                </li>
                <li>
                  <p className={classNames.option} >Size</p>
                  <ul className={classNames.size}>
                    <li className={classNames.sizeItem}><button className={classNames.sizeBtn}><img src={smallFilter} alt="" /></button></li>
                    <li className={classNames.sizeItem}><button className={classNames.sizeBtn}><img src={mediumFilter} alt="" /></button></li>
                    <li className={classNames.sizeItem}><button className={classNames.sizeBtn}><img src={bigFilter} alt="" /></button></li>
                  </ul>
                </li>
                <li>
                  <ul className={classNames.Price}>
                    <li><p className={classNames.option} >Price</p></li>
                    <li><p className={classNames.optionPrimer} >0-40,000 USA</p></li>
                  </ul>
                </li>
              </ul>
              <select className={classNames.sortBy} value = {state} onChange ={(e) => 
                {
                  const selectedsortBy = e.target.value
                  setState(selectedsortBy)
                }}>
                  <option value = "price">Price Low</option>
                  <option value = "price">Price High</option>

                </select>
            </div>
          )}
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
 