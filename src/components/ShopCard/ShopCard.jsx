
import React from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const ShopCard = ({ creatorName, itemName, year, price, shopImg}) => {
  const classNames = useStyles({});
  return (
    <div
      className={classNames.container}
      style={{ background: `url(${shopImg}) center center/cover no-repeat` }}
    >
      <Link to='/artwork'>
        <div className={classNames.descriptionContainer}>
          <p className={classNames.name}>{creatorName}</p>
          <ul className={classNames.list}>
            <p className={classNames.item}>{itemName}</p>
            <p className={classNames.item}>{year}</p>
          </ul>
          <p className={classNames.price}>{price} $</p>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
