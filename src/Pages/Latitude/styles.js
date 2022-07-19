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
    maxWidth: "1100px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "1100px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "850px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "550px",
    },
    width: "100%",
    paddingTop: "70px",
  },
  mainImage: {
    height: "calc(95vh - 70px)",
    width: "100%",
    position: "relative",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: "20px",

    [theme.breakpoints.down("sm")]: {
      padding: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "5px",
    },
    left: "50%",
    transform: "translateX(-50%)",
    padding: "30px",
    display: "flex",
    gap: "40px",
  },
  buttonContainer: {
    background: "#ffffff",
    padding: "20px",
  },
  button: {
    padding: "17px 20px",
    cursor: "pointer",
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 12px",
    },
    background: "transparent",
    border: "1px solid #000000",
    transition: "all 0.3s",
    "&:hover": {
      transform: "scale(1.01)",
      opacity: "0.7",
    },
  },
  primaryButton: {
    background: "#003566",
  },
  buttonPrimary: {
    border: "1px solid #ffffff",
  },
  aboutUsLink: {
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
    fontSize: "24px",
    fontWeight: "600",
    color: "#000000",
  },
  aboutUsLinkPrimary: {
    color: "#ffffff",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    fontSize: "24px",
    fontWeight: "600",
  },
  event: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
  },
  galleryList: {
    listStyleType: "none",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    display: "flex",
  },
  pastEvents: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
  },
  artistsBlock: {
    display: "grid",
    gap: "40px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      gap: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "50px",
      padding: "0 30px",
      gridTemplateColumns: "1fr 1fr",
      "&:last-child": {
        gridColumn: "1 / -1",
      },
    },
  },
  buttonHolder: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  },
}));

export default useStyles;
