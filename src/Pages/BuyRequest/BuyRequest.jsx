import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import classnames from 'classnames';

import FormComponent from '../../components/email/email';
import Title from '../../components/Title/Title';

import { useState } from 'react';
import useStyles from './styles';
import Footer from '../../components/Footer';


const BuyRequest = () => {
  const classNames = useStyles();
  const [value, setValue] = useState()

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Title text={'Request to buy'} />
        <div className={classNames.Holder}>
          <p></p>
          <div className={classNames.input}>
          <FormComponent/>
          <PhoneInput
            defaultCountry="AM"
            placeholder="type your number"
            value={value}
            onChange={setValue}/>
          </div>
        </div>
      
      </div>
      <Footer/>
    </div>
  );
};

export default BuyRequest;
