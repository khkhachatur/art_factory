import React from 'react';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react'

import { useState } from 'react';
import {motion} from 'framer-motion' 
import useStyles from './styles';

const Header = () => {
  const classNames = useStyles();

  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  const [open, setOpen] = useState(false);

  return (
    <div className={classNames.headerHolder}>
      <header className={classNames.header}>
        <div className={classNames.logo}>
          <Link to='/' className={classNames.logoText}>AF</Link>
        </div>
        <div className={classNames.menuBurger}>
          <Hamburger 
            size={20}
            onToggle={() => setOpen(!open)}
          />    
        {open && 
          <ul className={classNames.dropDown}>
            <motion.li 
              initial={animateFrom} 
              animate={animateTo} 
              transition ={{delay:'0.05'}} 
              className={classNames.link}>
                <Link to='/' className={classNames.link}>A1</Link>
            </motion.li>
            <motion.li 
              initial={animateFrom} 
              animate={animateTo} 
              transition ={{delay:'0.10'}} 
              className={classNames.link}>
                <Link to='/latitude' className={classNames.link}>Latitude</Link>
            </motion.li>
            <motion.li 
              initial={animateFrom} 
              animate={animateTo} 
              transition ={{delay:'0.20'}} 
              className={classNames.link}>
                <Link to='/studios' className={classNames.link}>Studios</Link>
            </motion.li>
            <motion.li 
              initial={animateFrom} 
              animate={animateTo} 
              transition ={{delay:'0.30'}} 
              className={classNames.link}>
                <Link to='/artists' className={classNames.link}>Artists</Link>
            </motion.li>
            <motion.li 
              initial={animateFrom} 
              animate={animateTo} 
              transition ={{delay:'0.40'}} 
              className={classNames.link}>
                <Link to='/shop' className={classNames.link}>The Shop</Link>
            </motion.li>
            <motion.li 
              initial={animateFrom} 
              animate={animateTo} 
              transition ={{delay:'0.50'}} 
              className={classNames.link}>
                <Link to='/beach' className={classNames.link}>The Beache</Link>
            </motion.li>
          </ul>}
        </div>
      </header>
    </div>
  );
};

export default Header;
