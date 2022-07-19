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
  topContainer: {
    width: "100%",
  },
  topSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
    gap: "120px",
  },
  mainImg: {
    [theme.breakpoints.down("xs")]: {
      width: "400px",
    },
    [theme.breakpoints.down(450)]: {
      width: "350px",
    },
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "30px",
  },
  dateTimeContainer: {
    display: "flex",
    gap: "20px",
  },
  dateTime: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    padding: "0",
    margin: "0",
  },
  strong: {
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Montserrat",
  },
  text: {
    fontSize: "18px",
    fontWeight: "400",
    fontFamily: "Montserrat",
  },
  location: {
    listStyleType: "none",
    display: "flex",
    padding: "0",
    margin: "0",
    gap: "20px",
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
    [theme.breakpoints.down("sm")]: {
      gap: "20px",
    },
    [theme.breakpoints.down(800)]: {
      gap: "5px",
    },
    gap: "30px",
  },
  ImageBlock: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },

    [theme.breakpoints.down(800)]: {
      height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "170px",
    },
    height: "300px",
  },
  DescriptionBlock: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "0",
    margin: "0",
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
    [theme.breakpoints.down(800)]: {
      width: "20px",
    },
    width: "30px",
  },
  socialFacebookImg: {
    [theme.breakpoints.down(800)]: {
      width: "21px",
    },
    width: "31px",
  },
  contactsBlock: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 25px",
    },

    padding: "20px 25px",
  },
  contactsTitle: {
    fontSize: "18px",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "10px",
    },
    [theme.breakpoints.down(800)]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      paddingBottom: "0px",
    },
    [theme.breakpoints.down(450)]: {
      fontSize: "10px",
      paddingBottom: "0px",
    },
    paddingBottom: "20px",
    margin: "0",
  },
  contactsItem: {
    fontSize: "16px",
    fontWeight: "400",
    [theme.breakpoints.down(800)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
    },
    margin: "0",
  },
  aboutContainer: {
    fontFamily: "Montserrat",
    paddingTop: "80px",
  },
  aboutText: {
    fontSize: "18px",
    fontWeight: "400",
  },
  partContainer: {
    width: "100%",
    paddingTop: "80px",
  },
  partSection: {
    display: "grid",
    gap: "40px",
    [theme.breakpoints.down("md")]: {
      gap: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 40px",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 40px",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
    },
    [theme.breakpoints.down(450)]: {
      padding: "0 20px",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
    },
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  },
  weekly: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "80px",
  },
  monthly: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "30px",
  },
  buttonHolder: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "80px",
  },
}));

export default useStyles;
