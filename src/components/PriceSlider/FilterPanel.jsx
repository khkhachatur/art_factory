import React from "react";

// import Search from "./Search";
import PriceSlider from "./PriceSlider";
import FilterListToggle from "./FilterListToggle";
import { makeStyles } from "@material-ui/core/styles";
import { categoryList, styleList, priceList } from "../../db/dataBase";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    [theme.breakpoints.down(650)]: {
      gridTemplateColumns: "1fr 1fr",
    },
    gap: "20px",
  },
  title: {
    fontFamily: "montserrat",
    fontWeight: "400",
    fontSize: "18px",
    margin: "0",
  },
  category: {
    display: "flex",
    flexDirection: "column",
  },
}));
const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectStyle,
  selectedStyle,
  changedPrice,
  selectedPrice,
  searchToggle,
  search,
  selectedPrice_2,
  selectPrice_2,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      {/* <Search value={search} searchToggle={searchToggle}/> */}
      <div className={classes.category}>
        <h2 className={classes.title}>Category</h2>
        <FilterListToggle
          title="Category"
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      <div className={classes.category}>
        <h2 className={classes.title}>Style</h2>
        <FilterListToggle
          title="Style"
          options={styleList}
          value={selectedPrice_2}
          selectToggle={selectPrice_2}
        />
      </div>
      <div>
        <PriceSlider value={selectedPrice} changedPrice={changedPrice} />
      </div>
      <div>
        {/* <FilterListToggle
          title="Style"
          options={priceList}
          value={selectedStyle}
          selectToggle={selectStyle}
        /> */}
      </div>
    </div>
  );
};

export default FilterPanel;
