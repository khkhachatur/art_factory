import React from 'react';

import ShopCard from './ShopCard/ShopCard';

function ShopLayout({list}) {
    return (
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'120px'}}>
            {list.map(({id, creatorName, itemName, year, price, itemImg}) => {
                return(
                <ShopCard
                    key={id}
                    creatorName={creatorName}
                    itemName={itemName}
                    year={year}
                    price={price}
                    shopImg={itemImg}
                />
                );
            })}
        </div>
    );
}


export default ShopLayout;