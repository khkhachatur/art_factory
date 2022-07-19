import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    maxWidth: "1200px",
    height: "100%",
    width: "100%",
    paddingTop: "70px",
  },
  mainImage: {
    height: "calc(95vh - 70px)",
    width: "100%",
    position: "relative",
  },

  qrSection: {
    position: "absolute",
    left: "3%",
    top: "30px",
  },
  qrText: {
    display: "flex",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
  },
  qrBox: {
    width: "40%",
  },
  monthly: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "30px",
  },
  events: {
    paddingTop: "80px",
  },
  galleryList: {
    listStyleType: "none",
    padding: "80px  0",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  contactSection: {
    width: "100%",
    margin: "0 auto",
    marginTop: "40px",
    border: "1px solid #000000",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    [theme.breakpoints.down("sm")]: {
      gap: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "7px",
    },
  },
  ImageBlock: {
    width: "100%",
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "170px",
    },
  },
  DescriptionBlock: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      gap: "6px",
    },
    gap: "10px",
    padding: "0",
    margin: "0",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
  },
  timeBlock: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "0",
    margin: "0",
  },
  sociallist: {
    listStyleType: "none",
    display: "flex",
    gap: "12px",
    padding: "0",
    margin: "0",
  },
  socialImg: {
    width: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15px",
    },
  },
  socialFacebookImg: {
    [theme.breakpoints.down("sm")]: {
      width: "21px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "16px",
    },
    width: "31px",
  },
  contactsBlock: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    padding: "20px 25px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 15px",
    },
  },
  contactsTitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      paddingBottom: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      paddingBottom: "0",
    },
    fontSize: "18px",
    fontWeight: "500",
    paddingBottom: "20px",
    margin: "0",
  },
  contactsItem: {
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    fontSize: "16px",
    fontWeight: "400",
    margin: "0",
  },

  opContainer: {
    padding: "80px 0",
    width: "100%",
  },
  opSection: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      padding: "0 200px ",
      flexDirection: "column",
      gap: "40px",
    },
    [theme.breakpoints.down(900)]: {
      padding: "0 100px ",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  opBlock: {
    display: "flex",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    padding: "10px",
    border: "1px solid rgba(0, 0, 0, 0.5)",
  },
  opDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  opList: {
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
    },
  },
  opTitle: {
    fontSize: "24px",
    fontWeight: "300",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
    margin: "0",
  },
  opItem: {
    fontSize: "16px",
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    marginLeft: "40px",
    "&:first-child": {
      listStyleType: "none",
      margin: "15px 0",
      paddingLeft: "-40px",
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  opButton: {
    background: "#003566",
    border: "none",
    padding: "8px 16px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      opacity: "0.9",
    },
  },
  contactsItem_2: {
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    fontWeight: "400",
  },

  disc: {
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
      margin: "16px 0 20px 0",
      fontSize: "12px",
    },
    fontWeight: "400",
    margin: "16px 0 50px 0",
  },
  buttonHolder: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
