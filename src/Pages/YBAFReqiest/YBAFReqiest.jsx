import React from 'react';

import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';

import plus from '../../images/interface/addWorkPlus.svg'
import skrep from '../../images/interface/skrep.svg'

import useStyles from './styles';
import Footer from '../../components/Footer';


const YBAFReqiest = () => {
  const classNames = useStyles();
      return (
  <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Latitude" navToTo="YBAF Request" />
          <div className={classNames.mainInfo}>
            <ul className={classNames.list}>
              <li>
                <Title text={'Please fill this info to apply'} />
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
                <h3>Bio</h3>
                <input className={classNames.input} style={{height:'270px'}} type="text" />
              </li>
            </ul>
            <div className={classNames.discription}>
              <Title text={'About YBAF Membership'} />
              <p className={classNames.text}>YBAF hosts a wide range of programs and activities, including, but not limited to exhibitions, shows, workshops, and lectures in fields such as visual art, literature, music, fashion, etc. </p>
              <p className={classNames.text}>YBAF members are an integral part of our interdisciplinary community. As artists and individuals, YBAF members are given the space to evolve and create; as a collective, members are here to inspire and motivate one another. Members will receive the following advantages: </p>
              <ul style={{padding:'0 0 0 15px'}}>
                <li className={classNames.text}>A platform and client base through the Art Factory network </li>
                <li className={classNames.text}>Opportunity to be featured in physical and virtual exhibitions (solo and group)</li>
                <li className={classNames.text}>Using YBAF’s network, YBAF members will receive support in sales of artworks locally and internationally  </li>
                <li className={classNames.text}>Support in fundraising new cultural and educational projects</li>
                <li className={classNames.text}>Management support in the creative, professional, and business realms </li>
                <li className={classNames.text}>Inclusion in special projects created by YBAF addressed to art collectors </li>
                <li className={classNames.text}>Professional presence and representation on social media</li>
                <li className={classNames.text}>Therapeutic support to artists and their creative processes</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Attach 3-4 works</h2>
            <ul className={classNames.workList}>
              <li style={{ background: `#F6CE4C center center/cover no-repeat`, }}>
                <img className={classNames.img}  src={plus} alt="" />
              </li>
              <li style={{ background: `#F6CE4C center center/cover no-repeat`, }}>
                <img  className={classNames.img} src={plus} alt="" />
              </li>
              <li style={{ background: `#F6CE4C center center/cover no-repeat`, }}>
                <img  className={classNames.img} src={plus} alt="" />
              </li>
              <li style={{ background: `#F6CE4C center center/cover no-repeat`, }}>
                <img  className={classNames.img} src={plus} alt=""/>
              </li>
             
            </ul>
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

export default  YBAFReqiest;
