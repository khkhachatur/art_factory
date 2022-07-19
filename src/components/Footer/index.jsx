import React from "react";

import useStyles from "./styles";
import FooterInfo from "../FooterInfo";

const Footer = ({ contactRef }) => {
  const classNames = useStyles();

  const scrollToTopBtn = () => {
    contactRef &&
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={classNames.footerHolder}>
      <footer className={classNames.footer}>
        <FooterInfo
          title="ART FACTORY ABOVYAN"
          tel="Tel: +374 91 911 911 "
          mail="Mail: artfactory@gmail.com"
          adress="Address: 1 Abovyan street "
        />
        <FooterInfo
          title="THE BEACH"
          tel="Tel: +374 77 862 300"
          mail="Mail: thebeach@gmail.com"
          // adress='Ashtarak Highway 7 Yerevan, Armenia'
          link="Apply for job"
        />
        <div className={classNames.mooreInfo}>
          <FooterInfo
            title="YBAF"
            tel="Tel: +374 44 204434"
            mail="Mail: latitude@yerevanbiennial.org"
            web="Web: https://ybaf.am/support-us/"
            // adress='Ashtarak Highway 7 Yerevan, Armenia'
            link="Membership request"
            // socialLink={}
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
