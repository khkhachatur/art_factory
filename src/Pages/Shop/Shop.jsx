import React, { useEffect, useState } from "react";

import Navigation from "../../components/Navigation/Navigation";

// import bigFilter from "../../images/filterBig.svg";
// import smallFilter from "../../images/filterSmall.svg";
import filter from "../../images/shop-items/filter.png";
// import mediumFilter from "../../images/filterMedium.svg";

import Chevron from "react-chevron";
import useStyles from "./styles";
import { shopCard } from "../../db/dataBase";
import Footer from "../../components/Footer";
import ShopLayout from "../../components/ShopLayout";
import FilterPanel from "../../components/PriceSlider/FilterPanel";

const Shop = () => {
  const classNames = useStyles();

  const [open, setOpen] = useState(false);
  const [list, setList] = useState(shopCard);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedPrice_2, setSelectedPrice_2] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 40000]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectStyle = (event, value) =>
    !value ? null : setSelectedStyle(value);

  const handleSearch = (event, value) => setSearchTerm(value);

  const handleChangedPrice = (event, value) => setSelectedPrice(value);

  const handleSelectedPrice_2 = (event, value) => setSelectedPrice_2(value);

  const apllyFilters = () => {
    let updatedList = shopCard;

    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory.props.value
      );
    }

    if (searchTerm) {
      updatedList = updatedList.filter((item) =>
        item.creatorName.toLowerCase().includes(setSearchTerm.toLowerCase())
      );
    }

    if (selectedStyle) {
      updatedList = updatedList.filter(
        (item) => item.style === selectedStyle.props.value
      );
    }

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);
  };

  useEffect(() => {
    apllyFilters();
  }, [
    selectedCategory,
    selectedPrice,
    selectedStyle,
    searchTerm,
    selectedPrice_2,
  ]);

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Shop" />
        <div className={classNames.filterSection}>
          <button onClick={() => setOpen(true)} className={classNames.filter}>
            <div className={classNames.filerHolder}>
              <img className={classNames.filterIcon} src={filter} alt="" />
              <h3 className={classNames.filterTitile}>Filter</h3>
              <div className={classNames.filterChevron}>
                <Chevron direction="down" />
              </div>
            </div>
          </button>
        </div>
        {open && (
          <div className={classNames.filterList}>
            {/* <li>
                  <p className={classNames.option} >Size</p>
                  <ul className={classNames.size}>
                    <li className={classNames.sizeItem}><button className={classNames.sizeBtn}><img src={smallFilter} alt="" /></button></li>
                    <li className={classNames.sizeItem}><button className={classNames.sizeBtn}><img src={mediumFilter} alt="" /></button></li>
                    <li className={classNames.sizeItem}><button className={classNames.sizeBtn}><img src={bigFilter} alt="" /></button></li>
                  </ul>
                </li> */}
            <ul className={classNames.filterList}>
              <FilterPanel
                selectToggle={handleSelectCategory}
                selectedCategory={selectedCategory}
                selectedStyle={selectedStyle}
                searchToggle={handleSearch}
                searchTerm={searchTerm}
                selectedPrice_2={selectedPrice_2}
                selectePrice_2={handleSelectedPrice_2}
                selectStyle={handleSelectStyle}
                selectedPrice={selectedPrice}
                changedPrice={handleChangedPrice}
              />
            </ul>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ShopLayout list={list} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
