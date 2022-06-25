import React, {useState} from 'react';

import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';

import skrep from '../../images/interface/skrep.svg'
import join from '../../images/interface/joinUS.jpg'

import useStyles from './styles';
import Footer from '../../components/Footer';


const ApplyJob = () => {
  const classNames = useStyles();

  const [state, setState] = useState("")

      return (
  <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Studios" navToTo="Apply form" />
          <div className={classNames.mainInfo}>
            <ul className={classNames.list}>
              <li>
                <Title text={'Please fill this form to apply'} />
              </li>
              <li>
                <h3>Full name</h3>
                <input className={classNames.input} type="text" />
              </li>
              <li>
                <h3>Mail</h3>
                <input className={classNames.input} type="text" />
              </li>
              <li>
                <h3>Tel</h3>
                <input className={classNames.input} type="text" />
              </li>
              <li>
                <h3>Age</h3>
                <input style={{width:'115px'}} className={classNames.input} type="number" />
              </li>
              <li>
                <h3>Choose job</h3>
                <select className={classNames.inputAge} value = {state} onChange ={(e) => 
                {
                  const selectedMale = e.target.value
                  setState(selectedMale)
                }}>
                  <option value = "male">Waitress</option>
                  <option value = "female">Waitress1</option>
                  <option value = "female">Waitress2</option>
                  <option value = "female">Waitress3</option>
                </select>
              </li>
              <li>
                <h3>Write a message to us</h3>
                <input className={classNames.input} type="text" />
              </li>
            </ul>
            <img style={{paddingTop:'150px'}} src={join} alt="ERR" />
          </div>
          <div>
          </div>
          <div style={{display:'flex', gap:'5px', padding:'40px 0', cursor: 'pointer', }}>
            <img src={skrep} alt="" />
            <p style={{color:'#2F80ED', borderBottom:'1px solid', fontFamily: 'Inter', fontWeight: '400',fontSize: '18px',}}>Attache portfolio or CV</p>
          </div>
          <button className={classNames.btn}>Submit</button>
      </div>
    <Footer/>
  </div>
  );
};

export default  ApplyJob;
