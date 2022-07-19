import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerHolder: {
    marginBottom: theme.spacing(2),
    background: "#ffffff",
    width: "100%",
    position: "fixed",
    zIndex: "1000",
    top: "0",
    display: "flex",
    borderBottom: "1px solid rgba(196, 196, 196, 0.7)",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "1100px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "850px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "550px",
    },
    maxWidth: "1200px",
  },
  menuHolder: {},
  dropDown: {
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
    position: "absolute",
    right: "20px",
    [theme.breakpoints.down("md")]: {
      right: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      right: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      right: "10px",
    },
    padding: "60px 30px",
    background: "#ffffff",
    width: "fit-content",
    margin: "0",
  },
  link: {
    margin: "7px 0",
    color: "black",
    fontSize: "18px",
    fontWeight: "700",
    transition: "all 0.3s",
    "&:hover": {
      opacity: "0.7",
    },
  },
  logo: {
    maxHeight: "70px",
    border: "1px solid rgba(196, 196, 196, 0.7)",
    textAlign: "center",
  },
  logoImg: {
    margin: "0",
    maxHeight: "69px",
  },
}));

export default useStyles;
