import React from 'react';

import Search from './Search';
import PriceSlider from './PriceSlider';
import FilterListToggle from './FilterListToggle';
import { makeStyles } from '@material-ui/core/styles';
import { categoryList, styleList } from '../../db/dataBase';

const useStyles = makeStyles({
    list:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        gap:'20px'
    },
    title:{
        fontFamily:'montserrat', 
        fontWeight:'400', 
        fontSize:'18px',  
        margin:'0'
    },
    category:{
        display:'flex',
        flexDirection:'column'
    }
}) 
const FilterPanel = ({
    selectedCategory,
    selectToggle,
    selectStyle,
    selectedStyle,
    changedPrice,
    selectedPrice,
    searchToggle,
    search
}) => {
    const classes = useStyles()
    return (
        <div className={classes.list}>
            {/* <Search value={search} searchToggle={searchToggle}/> */}
            <div className={classes.category}>
                <h2 className={classes.title} >Category</h2>
                <FilterListToggle title='Category' options={categoryList} value={selectedCategory} selectToggle={selectToggle}/>
            </div>
            <div className={classes.category}>
                 <h2 className={classes.title}>Style</h2>
                <FilterListToggle title='Style' options={styleList} value={selectedStyle} selectToggle={selectStyle}/>
            </div>
            <div>
                <PriceSlider value={selectedPrice} changedPrice={changedPrice}/>
            </div>
        </div>
    );
}

export default FilterPanel;