import React from "react";

import Title from "../../components/Title/Title";
import Navigation from "../../components/Navigation/Navigation";

import skrep from "../../images/interface/skrep.svg";
import jobPic from "../../images/interface/ApplyForAJob.jpg";

import useStyles from "./styles";
import Footer from "../../components/Footer";

const ApplyForm = () => {
  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Studios" navToTo="Apply form" />
        <div className={classNames.mainInfo}>
          <ul className={classNames.list}>
            <li>
              <Title text={"Please fill this form to apply"} />
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
          </ul>
          <div className={classNames.discription}>
            <Title text={"About"} />
            <p style={{ paddingTop: "70px" }} className={classNames.text}>
              Art Factory provides a multi-functional space and community to
              Yerevan-based creatives.
            </p>
            <p className={classNames.text}>
              We have a variety of studio spaces available to rent, all equipped
              with lighting, electricity, a wash closet and a shower.
            </p>
            <p className={classNames.text}>
              Our nine studios are home to artists at all stages of their
              careers, working across all mediums.
            </p>
            <img src={jobPic} className={classNames.mainImg} alt="" />
          </div>
        </div>
        <div></div>
        <div
          style={{
            display: "flex",
            gap: "5px",
            padding: "40px 0",
            cursor: "pointer",
          }}
        >
          <img src={skrep} alt="" />
          <p
            style={{
              color: "#2F80ED",
              borderBottom: "1px solid",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Attache portfolio or CV
          </p>
        </div>
        <button className={classNames.btn}>Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyForm;
