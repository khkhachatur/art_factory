import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { shopCard  } from '../../db/dataBase';

import useStyles from './styles';


  const ShopGallery = ({}) => {

  const classNames = useStyles();

  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
      {shopCard.map((item) => (
          <ImageListItem >
          <img className={classNames.img}
              // src={`${item.img}?w=248&fit=crop&auto=format`}
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              // alt={item.title}
              loading="lazy"
            />
              <div className={classNames.descriptionContainer}>
                <p className={classNames.name}>{item.creatorName}</p>
                <ul className={classNames.list}>
                  <p className={classNames.item}>{item.itemName}</p>
                  <p className={classNames.item}>{item.year}</p>
                </ul>
                <p className={classNames.price}>{item.price}</p>
              </div>
          </ImageListItem>
      ))}
        </ImageList>
      </Box>

  );

};
export default ShopGallery;


