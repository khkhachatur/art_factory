import React from 'react';

import PriceSlider from './PriceSlider';
import FilterListToggle from './FilterListToggle';
import { makeStyles } from '@material-ui/core/styles';
import { categoryList, styleList } from '../../db/dataBase';

const useStyles = makeStyles({
    list:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr'
    },
   
}) 
const FilterPanel = ({
    selectedCategory,
    selectToggle,
    selectStyle,
    selectedStyle,
    changedPrice,
    selectedPrice
}) => {
    const classes = useStyles()
    return (
        <div className={classes.list}>
            <div>
                <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle}/>
            </div>
            <div>
                <FilterListToggle options={styleList} value={selectedStyle} selectToggle={selectStyle}/>
            </div>
            <div>
                <PriceSlider value={selectedPrice} changedPrice={changedPrice}/>
            </div>
        </div>
    );
}

export default FilterPanel;