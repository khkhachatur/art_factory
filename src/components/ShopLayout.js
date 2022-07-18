import React from 'react';
import { makeStyles } from '@material-ui/core';
import ShopCard from './ShopCard/ShopCard';

import './list.css'

const useStyles = makeStyles({
    grid:{
        display: 'grid',
        gridGap: '50px',
        gridTemplateColumns: '2fr 1fr 2fr',
    },
    gridItem:{
    }
    
})


function ShopLayout({list}) {
    const classes =useStyles()
    return (
        <div className={classes.grid}>
            {list.map(
              (item) =>
                  <ShopCard
                    key={item.id}
                    creatorName={item.creatorName}
                    itemName={item.itemName}
                    year={item.year}
                    price={item.price}
                    shopImg={item.itemImg}
                  />
            )}
        </div>

    );
}


export default ShopLayout;