import React, { useState, useEffect } from "react";

import Chevron from "react-chevron";
import Title from "../../components/Title/Title";
import Navigation from "../../components/Navigation/Navigation";
import SeeAllButton from "../../components/SeeAllButton/SeeAllButton";

import x from "../../images/interface/close-popups.svg";
import Work_01 from "../../images/ArtistsPage/Work_01.png";
import Work_02 from "../../images/ArtistsPage/Work_02.png";
import Work_03 from "../../images/ArtistsPage/Work_03.png";
import Work_04 from "../../images/ArtistsPage/Work_04.png";

import useStyles from "./styles";
import Footer from "../../components/Footer";

const Thumbnail = ({ arr, image, index }) => {
  const classNames = useStyles();

  return (
    <div className={classNames.tumbnail}>
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? classNames.action : ""}
          alt=""
        />
      ))}
    </div>
  );
};

const SlideShow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const classNames = useStyles();

  return (
    <div className={classNames.slideShow}>
      <div className={classNames.imgHolder}>
        <img className={classNames.mainImg} src={imgs[index]} alt="" />
      </div>
      <div className={classNames.actions}>
        <button className={classNames.actoinButtons} onClick={prev}>
          <Chevron direction="left" />
        </button>
        <button className={classNames.actoinButtons} onClick={next}>
          <Chevron direction="right" />
        </button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
};

const ArtWorksPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const classNames = useStyles();
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <Navigation navTo="Events" navToTo="Artist Name" />

        <div className={classNames.topSection}>
          <div className={classNames.slider}>
            <SlideShow
              imgs={[
                "https://images.unsplash.com/photo-1657493702739-4794de99558a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                "https://images.unsplash.com/photo-1657804433404-c050efdd1144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
              ]}
            />
          </div>
          <div className={classNames.listHolder}>
            <ul className={classNames.list}>
              <li>
                <ul className={classNames.NameYear}>
                  <h2 className={classNames.title}>Artwork Name:</h2>
                  <h2 className={classNames.title}>2019</h2>
                </ul>
                <p className={classNames.item}>By Artist Name</p>
              </li>
              <li>
                <ul className={classNames.NameYear}>
                  <ul className={classNames.infoList}>
                    <li className={classNames.item}>Size:</li>
                    <li className={classNames.item}>00x00</li>
                  </ul>
                  <ul className={classNames.infoList}>
                    <li className={classNames.item}>Material:</li>
                    <li className={classNames.item}>Oil on Canvas</li>
                  </ul>
                </ul>
              </li>
              <li>
                <ul className={classNames.infoList}>
                  <h2 className={classNames.item}>Price:</h2>
                  <h2 className={classNames.item}>4000 $</h2>
                </ul>
              </li>
              <li className={classNames.item}>
                <button
                  style={{ padding: "13px 20px" }}
                  className={classNames.btn}
                  onClick={() => setOpenModal(true)}
                >
                  Request to buy
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={classNames.about}>
          <Title text="About Artwork" />
          <p className={classNames.aboutText}>
            Born in Baghdad and raised in Kuwait, Fahar is familiar with the
            reality of life in a society that is characterized by insecurity and
            homelessness. The search for protection and security play an
            essential role in the everyday life of people in the Middle East and
            thus became the central theme of his painting. Since 2009, Al-Salih
            has been creating works under the title “Shelter”, a series of
            images that has since been an essential part of his painterly work
            and an examination of his roots, but also a primeval human desire.
            Over the years, the series developed into a homage to art itself, to
            painting, which became his retreat and home.
          </p>
        </div>
        <div className={classNames.works}>
          <Title text="Other Works of Artist Name" />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={classNames.workHolder}>
              <img
                className={classNames.workImg}
                src={Work_01}
                alt="Img Not Found"
              />
              <img
                className={classNames.workImg}
                src={Work_02}
                alt="Img Not Found"
              />
              <img
                className={classNames.workImg}
                src={Work_03}
                alt="Img Not Found"
              />
              <img
                className={classNames.workImg}
                src={Work_04}
                alt="Img Not Found"
              />
            </div>
          </div>
          <div className={classNames.buttonHolder}>
            <SeeAllButton link="" />
          </div>
        </div>
        {openModal && (
          <div className={classNames.modal}>
            <div
              className={classNames.close}
              onClick={() => setOpenModal(false)}
            >
              <img src={x} alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Title text="Request to buy" />
            </div>
            <div className={classNames.modalSection}>
              <ul className={classNames.modalList}>
                <li className={classNames.text}>
                  Latitude strictly represents original artworks by Armenian
                  artists—local and diasporic alike.{" "}
                </li>
                <li className={classNames.text}>
                  Every piece is carefully packaged by a member of the Art
                  Factory collective according to standardized packaging
                  specifications set by Latitude.{" "}
                </li>
                <li style={{ fontSize: "14px" }} className={classNames.text}>
                  Our specialist is guaranteed to contact you within 48 hours of
                  submitting a request.
                </li>
              </ul>
              <ul className={classNames.modalList}>
                <li>
                  <p className={classNames.title1}>Mail</p>
                  <input className={classNames.input} type="text" />
                </li>
                <li>
                  <p className={classNames.title1}>Tel</p>
                  <input className={classNames.input} type="text" />
                </li>
                <li>
                  <p className={classNames.title1}>Text or notes</p>
                  <input
                    style={{ height: "120px" }}
                    className={classNames.input}
                    type="text"
                  />
                </li>
                <li>
                  <button className={classNames.btn}>Submit</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ArtWorksPage;
