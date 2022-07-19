import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Montserrat",
  },
  allContainer: {
    paddingLeft: "10px",
  },
  title: {
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },

    fontSize: "24px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  item: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },

    fontWeight: "400",
    lineHeight: "1px",
    display: "flex",
    justifyContent: "space-between",
    "&:first-child": {
      lineHeight: "30px",
    },
  },
  contacts: {
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },

    fontWeight: "700",
    fontFamily: "Montserrat",
  },
  contactItem: {
    fontSize: "16px",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },

    fontFamily: "Montserrat",
  },
  mail: {
    fontSize: "16px",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },

    fontFamily: "Montserrat",
  },
  maillink: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "400",
  },
  sociallist: {
    display: "flex",
    gap: "4px",
    listStyleType: "none",
    padding: "0",
  },
  socialImg: {
    width: "65%",
    height: "80%",
  },
  socialFacebookImg: {
    width: "70.5%",
    height: "82%",
  },
}));

export default useStyles;
