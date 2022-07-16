import React, {useEffect, useState} from 'react';

import Navigation from '../../components/Navigation/Navigation';

import bigFilter from '../../images/filterBig.svg'
import smallFilter from '../../images/filterSmall.svg'
import filter from '../../images/shop-items/filter.png'
import mediumFilter from '../../images/filterMedium.svg'

import Chevron from 'react-chevron'
import useStyles from './styles';
import { shopCard  } from '../../db/dataBase';
import Footer from '../../components/Footer';
import ShopLayout from '../../components/ShopLayout';
import FilterPanel from '../../components/PriceSlider/FilterPanel';

const Shop = () => {
  
  const classNames = useStyles();

  const [open, setOpen] =useState(false)
  const [list, setList] = useState(shopCard)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStyle, setSelectedStyle] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState([0,40000])
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSelectCategory =(event, value) =>!value?null:setSelectedCategory(value)

  const handleSelectStyle =(event, value) =>!value?null:setSelectedStyle(value)

  const handleChangedPrice = (event, value) => setSelectedPrice(value);

  const apllyFilters = () => {
    let updatedList = shopCard;

    if(selectedCategory){
      updatedList=updatedList.filter((item) => item.category === selectedCategory.props.value)
    }

    if(selectedStyle){
      updatedList=updatedList.filter((item) => item.style === selectedStyle.props.value)
    }
    
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    
    updatedList = updatedList.filter((item) => item.price >= minPrice && item.price <= maxPrice);
    
    setList(updatedList);
  }
  
  useEffect(() => {
    apllyFilters();
  }, [selectedCategory, selectedPrice, selectedStyle])
  
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Shop" />
        <div className={classNames.filterSection}>
          <button onClick={() => setOpen(true)} className={classNames.filter}>
            <div className={classNames.filerHolder}>
              <img className={classNames.filterIcon} src={filter} alt="" />
              <h3 className={classNames.filterTitile}>Filter</h3>
              <div className={classNames.filterChevron}><Chevron direction='down'/></div>
            </div>
          </button>
          <div className={classNames.searchSection}>
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
        </div>
        {open && (
            <div className={classNames.filterList}>
              <ul className={classNames.filterLeft}>
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
                    <FilterPanel 
                      selectToggle={handleSelectCategory}
                      selectedCategory={selectedCategory}
                      selectedStyle={selectedStyle}
                      selectStyle={handleSelectStyle}
                      selectedPrice={selectedPrice}
                      changedPrice={handleChangedPrice}
                    />
                  </ul>
                </li>
              </ul>
            </div>
          )}
        <div style={{padding:'40px 0'}}>
          <ShopLayout list={list}/>
        
        </div>
      </div>
      <Footer/>
    </div>
  );
};


export default Shop;
 